import { Module } from '@nestjs/common';
import { InvoiceController } from './invoice.controller';
import { InvoiceModule } from './invoice.module';

@Module({
  imports: [InvoiceModule],
  controllers: [InvoiceController],
})
export class InvoiceControllerModule {}
