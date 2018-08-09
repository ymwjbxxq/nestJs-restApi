import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { CreateFriendCommand } from '../commands/create-friend.command';
import { Friend } from '../../domain/entities/friend.entity';

@CommandHandler(CreateFriendCommand)
export class CreateFriendHandler implements ICommandHandler<CreateFriendCommand> {
  constructor(@InjectRepository(Friend) private readonly friendRepository: Repository<Friend>) {}

  async execute(command: CreateFriendCommand, resolve: (value?) => void) {
    var friend = new Friend();
    friend.name = command.name;
    var friend = await this.friendRepository.save(friend);

    resolve(friend.id.toHexString());
  }
}