import React, { useCallback, useMemo } from 'react';
import {
  createEditor,
  Descendant,
  Editor,
  Element as SlateElement,
  Node as SlateNode,
} from 'slate';
import { withHistory } from 'slate-history';
import {
  Editable,
  ReactEditor,
  Slate,
  withReact,
  RenderElementProps,
} from 'slate-react';
import { withShortcuts } from './hocs/withShortcuts';
import { Element } from './components/Element';
import { SHORTCUTS } from './const';

type Props = {
  submitRender?: (editor: ReactEditor) => React.ReactElement;
  initialValue?: Descendant[];
};
const defaultValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      {
        text: '',
      },
    ],
  },
];

export const SlateEditor: React.FC<Props> = ({
  submitRender,
  initialValue,
}) => {
  const isReadOnly = !submitRender;

  const renderElement = useCallback(
    (props: RenderElementProps) => <Element {...props} />,
    [],
  );
  const editor = useMemo(
    () => withShortcuts(withReact(withHistory(createEditor()))),
    [],
  );

  const handleDOMBeforeInput = useCallback(() => {
    queueMicrotask(() => {
      const pendingDiffs = ReactEditor.androidPendingDiffs(editor);

      const scheduleFlush = pendingDiffs?.some(({ diff, path }) => {
        if (!diff.text.endsWith(' ')) {
          return false;
        }

        const { text } = SlateNode.leaf(editor, path);
        const beforeText = text.slice(0, diff.start) + diff.text.slice(0, -1);
        if (!(beforeText in SHORTCUTS)) {
          return false;
        }

        const blockEntry = Editor.above(editor, {
          at: path,
          match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n),
        });
        if (!blockEntry) {
          return false;
        }

        const [, blockPath] = blockEntry;
        return Editor.isStart(editor, Editor.start(editor, path), blockPath);
      });

      if (scheduleFlush) {
        ReactEditor.androidScheduleFlush(editor);
      }
    });
  }, [editor]);

  return (
    <Slate editor={editor} value={initialValue || defaultValue}>
      <Editable
        onDOMBeforeInput={handleDOMBeforeInput}
        renderElement={renderElement}
        placeholder="Write some markdown..."
        spellCheck
        autoFocus
        readOnly={isReadOnly}
      />
      {submitRender?.(editor)}
    </Slate>
  );
};
