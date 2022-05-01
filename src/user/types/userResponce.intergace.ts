import { UserType } from '@app/user/types/user.type';

export interface UserResponseProps {
  user: UserType & { token: string };
}
