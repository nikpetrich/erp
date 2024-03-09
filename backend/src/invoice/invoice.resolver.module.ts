import { Module } from '@nestjs/common';
import { InvoiceResolver } from './invoice.resolver';
import { InvoiceServiceModule } from './invoice.service.module';

@Module({
  imports: [InvoiceServiceModule],
  providers: [InvoiceResolver],
})
export class InvoiceControllerModule {}
