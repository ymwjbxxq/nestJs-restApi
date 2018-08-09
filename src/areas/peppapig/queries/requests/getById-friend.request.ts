import { ICommand } from '@nestjs/cqrs';

export class GetByIdFriendQuery implements ICommand {
    constructor(public readonly id: string) {}
}