import { Controller, Get, Post, Param, Body, ValidationPipe, Res, HttpCode, HttpStatus } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Request, Response } from 'express';
import { peppaPigRoute } from '../routes/peppaPig.route';
import { CreateFriendCommand } from '../../tasks/commands/create-friend.command';
import { GetAllFriendQuery } from '../../queries/requests/getall-friend.request';
import { GetByIdFriendQuery } from '../../queries/requests/getById-friend.request';
import { FriendResponse } from '../../queries/responses/friend.respone';
import { FriendRequest } from '../models/friend.request';

@Controller(peppaPigRoute.controller)
export class PeppaPigController {
  constructor(private readonly commandBus: CommandBus) {}

  @Get()
  async all(): Promise<FriendResponse[]> {
    return await this.commandBus.execute(new GetAllFriendQuery());
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<FriendResponse> {
    return await this.commandBus.execute(new GetByIdFriendQuery(id));
  }

  @Post()
  async create(@Body(new ValidationPipe({transform: true})) request: FriendRequest, @Res() response: Response) {
    return await this.commandBus.execute(new CreateFriendCommand(request.name))
      .then((id) => {
        response.setHeader('Location', peppaPigRoute.baseUrl + peppaPigRoute.controller + id);
        response.status(HttpStatus.CREATED);
  
        return response.send();
      });
  }
}
 