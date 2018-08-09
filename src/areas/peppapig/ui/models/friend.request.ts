import { IsString, IsInt } from 'class-validator';

export class FriendRequest {
  @IsString()
  readonly name: string;
}
