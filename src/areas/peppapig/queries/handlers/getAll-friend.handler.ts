import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { GetAllFriendQuery } from '../requests/getall-friend.request';
import { Friend } from '../../domain/entities/friend.entity';
import { FriendResponse } from '../responses/friend.respone';

@CommandHandler(GetAllFriendQuery)
export class GetAllFriendHandler implements ICommandHandler<GetAllFriendQuery> {
  constructor(@InjectRepository(Friend) private readonly friendRepository: Repository<Friend>,) {}

  async execute(request: GetAllFriendQuery, resolve: (value?) => void) {
    var response: FriendResponse[] = [];

    let friends = await this.friendRepository.find();
    friends.forEach((friend: Friend) => {
      // AUTOMAPPER
      let friendResponse = new FriendResponse();
      friendResponse.id = friend.id.toHexString();
      friendResponse.name = friend.name;

      response.push(friendResponse);
    });

    resolve(response);
  }
}