/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！

declare namespace API {
  interface CommonInfo {
    updatedAt: Date;
    objectId: string;
    createdAt: Date;
  }

  interface Result<T> {
    data: T & CommonInfo;
  }

  interface Pagination_Result<T> {
    data: {
      results: (T & CommonInfo)[];
      count: number;
    };
  }

  interface UserInfoV0 {
    shortId?: string;
    confirm: string;
    email: string;
    sessionToken: string;
    phone: string;
    username: string;
    agreement: boolean;
    prefix: string;
    emailVerified: boolean;
    gender: string;
    mobilePhoneVerified: boolean;
  }

  interface EmailLoginV0 {
    email: string;
    password: string;
  }

  type InboxType = 'default';
  type __Type = 'Pointer';
  type ClassName = '_User';
}
