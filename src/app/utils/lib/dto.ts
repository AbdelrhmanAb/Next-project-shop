interface ICreatePostDTO {
  title: string;
  body: string;
}

interface IUpdatePostDTO {
  title?: string;
  body?: string;
}

interface IRegisterUserDto {
  username: string;
  email: string;
  password: string;
}

interface ILoginUserDto {
  email: string;
  password: string;
}

interface IUpdateUserDto {
  username?: string;
  email?: string;
  password: string;
}

interface ICreateNewComment {
  text: string,
  postId: number,
}

interface IUpdateCommentDto {
  text: string;
}

interface IAuthToken {
  userPayload :{id:number, username:string, isAdmin:boolean}
}

export type {
  ICreatePostDTO,
  IUpdatePostDTO,
  IRegisterUserDto,
  ILoginUserDto,
  IUpdateUserDto,
  ICreateNewComment,
  IUpdateCommentDto,
  IAuthToken
};