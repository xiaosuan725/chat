import { request } from '@umijs/max';

// 登录
export async function loginUser(
  body: API.EmailLoginV0,
  options?: { [key: string]: any },
) {
  // return request<API.Result_PageInfo_UserInfo__>('/1.1/users', {
  return request<API.UserInfoV0>('/1.1/login', {
    method: 'POST',
    data: {
      ...body,
    },
    ...(options || {}),
  });
}
