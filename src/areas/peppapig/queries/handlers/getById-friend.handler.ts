import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { Friend } from '../../domain/entities/friend.entity';
import { GetByIdFriendQuery } from '../requests/getById-friend.request';
import { FriendResponse } from '../responses/friend.respone';

@CommandHandler(GetByIdFriendQuery)
export class GetByIdFriendHandler implements ICommandHandler<GetByIdFriendQuery> {
  constructor(@InjectRepository(Friend) private readonly friendRepository: Repository<Friend>,) {}

  async execute(request: GetByIdFriendQuery, resolve: (value?) => void) {
    let friend = await this.friendRepository.findOne(request.id)

    // AUTOMAPPER
    let response = new FriendResponse();
    response.id = friend.id.toHexString();
    response.name = friend.name;

    resolve(response);
  }
}