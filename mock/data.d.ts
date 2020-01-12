declare interface Imessage {
  sucess: string;
  faild: string;
}
declare interface Igender {
  man: string;
  woman: string;
}
declare interface Iinfo {
  userid: number;
  realname: string;
  username: string;
  gender: Igender;
  emailaddr: string;
  phone: string;
  organization: string;
  avater: string;
  password: string;
}
declare interface Idata {
  info: Iinfo;
}
declare interface Iuser {
  code: number;
  message: Imessage;
  data: Idata;
}

// declare let user: Iuser

export const user:Iuser