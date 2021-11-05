export type User = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export type AuthData = {
  email: string,
  password: string,
}

export type AuthInfo = User & {
  email: string,
  token: string,
}

/* eslint-disable camelcase */
export type RawUser = {
  avatar_url: string;
  id: number;
  is_pro: boolean;
  name: string;
}
