import AV from 'leancloud-storage';

export const useStatus = () => {
  const a = () => {
    let status = new AV.Status('视频url', '我喜欢了视频xxxx.');
    status.set('sound', 'sound');
    AV.Status.sendStatusToFollowers(status).then(
      function (status) {
        //发布状态成功，返回状态信息
        console.dir(status);
      },
      function (err) {
        //发布失败
        console.dir(err);
      },
    );
  };

  return {
    a,
  };
};
