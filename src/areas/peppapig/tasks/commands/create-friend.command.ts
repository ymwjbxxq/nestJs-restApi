import { ICommand } from '@nestjs/cqrs';

export class CreateFriendCommand implements ICommand {
  constructor(public readonly name: string) {}
}
