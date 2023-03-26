import { request } from '@umijs/max';

// 注册
export async function registerUser(
  body: API.UserInfoV0,
  options?: { [key: string]: any },
) {
  // return request<API.Result_PageInfo_UserInfo__>('/1.1/users', {
  return request<API.UserInfoV0>('/1.1/users', {
    method: 'POST',
    data: {
      ...body,
    },
    ...(options || {}),
  });
}

// 获取当前用户
export async function getUser(options?: { [key: string]: any }) {
  // return request<API.Result_PageInfo_UserInfo__>('/1.1/users', {
  return request<API.UserInfoV0>('/1.1/users/me', {
    method: 'GET',
    ...(options || {}),
  });
}

// 根据用户id获得
export async function getUserById(
  { objectId }: { objectId?: string },
  options?: { [key: string]: any },
) {
  // return request<API.Result_PageInfo_UserInfo__>('/1.1/users', {
  return request<API.UserInfoV0>(`/1.1/users/${objectId}`, {
    method: 'GET',
    ...(options || {}),
  });
}
