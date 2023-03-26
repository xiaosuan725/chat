import getPageParams from '@/utils/getPageParams';
import { request } from '@umijs/max';

// 获得动态
export async function getStatus(
  params: {
    pageNum?: number;
    pageSize?: number;
    where?: string;
  },
  options?: { [key: string]: any },
) {
  const { pageNum, pageSize, where } = params;
  const pageParams = getPageParams({ pageNum, pageSize });
  return request<any>('/1.1/classes/Message', {
    method: 'GET',
    params: {
      ...pageParams,
      where,
      include: 'author',
      descending: 'createdAt',
    },
    ...(options || {}),
  });
}

// 发布
export async function addStatus(
  body: {
    objectId: string;
    content: string;
    links?: string[];
    tags?: string[];
  },
  options?: { [key: string]: any },
) {
  return request<any>('/1.1/classes/Message', {
    method: 'POST',
    data: {
      content: body.content,
      links: body.links,
      tags: body.tags,
      author: {
        __type: 'Pointer',
        className: '_User',
        objectId: body.objectId,
      },
    },
    ...(options || {}),
  });
}

// 删除
export async function deleteStatus(
  { objectId }: { objectId: string },
  options?: { [key: string]: any },
) {
  return request<any>(`/1.1/classes/Message/${objectId}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}
