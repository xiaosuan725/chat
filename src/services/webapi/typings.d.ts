/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！

declare namespace API {
  interface CommonInfo {
    updatedAt: Date;
    objectId: string;
    createdAt: Date;
  }

  interface UserInfoV0 extends CommonInfo {
    shortId?: string;
    confirm?: string;
    email: string;
    sessionToken: string;
    phone: string;
    username: string;
    nickName: string;
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
