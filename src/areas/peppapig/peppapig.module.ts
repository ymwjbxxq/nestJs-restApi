import { CommandBus, EventBus, CQRSModule } from '@nestjs/cqrs';
import { OnModuleInit, Module } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandHandlers } from './tasks/registration';
import { Friend } from './domain/entities/friend.entity';
import { QueryHandlers } from './queries/registration';
import { PeppaPigController } from './ui/controllers/peppaPig.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Friend]), CQRSModule],
  controllers: [PeppaPigController],
  providers: [...CommandHandlers, ...QueryHandlers],
})
export class PeppaPigModule implements OnModuleInit {
  constructor(
    private readonly moduleRef: ModuleRef,
    private readonly command$: CommandBus
  ) {}

  onModuleInit() {
    this.command$.setModuleRef(this.moduleRef);
    this.command$.register(CommandHandlers);
    this.command$.register(QueryHandlers);    
  }
}
