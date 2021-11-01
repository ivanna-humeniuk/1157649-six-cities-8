export type User = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

/* eslint-disable camelcase */
export type RawUser = {
  avatar_url: string;
  id: number;
  is_pro: boolean;
  name: string;
}
