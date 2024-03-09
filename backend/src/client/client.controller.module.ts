import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientModule } from './client.module';

@Module({
  imports: [ClientModule],
  controllers: [ClientController],
})
export class ClientControllerModule {}
