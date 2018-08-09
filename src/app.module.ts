import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { PeppaPigModule } from 'areas/peppapig/peppapig.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PeppaPigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
