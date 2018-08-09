import { ICommand } from '@nestjs/cqrs';

export class GetAllFriendQuery implements ICommand {
  constructor() {}
}