declare type messageType = 'sucess' | 'faild';
declare type genderType = '男' | '女';
export declare interface Iinfo {
  userid: number;
  realname: string;
  username: string;
  gender: genderType;
  emailaddr: string;
  phone: string;
  organization: string;
  avater: string;
  password: string;
}
declare interface Idata {
  info: Iinfo;
}
export declare interface Iuser {
  code: number;
  message: messageType;
  data: Idata;
}

// declare let user: Iuser

export declare const user: Iuser
