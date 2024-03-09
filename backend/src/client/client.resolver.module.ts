import { Module } from '@nestjs/common';
import { ClientResolver } from './client.resolver';
import { ClientServiceModule } from './client.service.module';

@Module({
  imports: [ClientServiceModule],
  providers: [ClientResolver],
})
export class ClientControllerModule {}
