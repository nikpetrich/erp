import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateInvoiceInput } from './dto/create-invoice.input';
import { UpdateInvoiceInput } from './dto/update-invoice.input';
import { Invoice } from './entities/invoice.entity';
import { InvoiceService } from './invoice.service';

@Resolver(() => Invoice)
export class InvoiceResolver {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Mutation(() => Invoice)
  createInvoice(
    @Args('createInvoiceInput') createInvoiceInput: CreateInvoiceInput,
  ) {
    return this.invoiceService.create(createInvoiceInput);
  }

  @Query(() => [Invoice], { name: 'invoices' })
  findAll() {
    return this.invoiceService.findAll();
  }

  @Query(() => Invoice, { name: 'invoice' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceService.findOne(id);
  }

  @Mutation(() => Invoice)
  updateInvoice(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateInvoiceInput') updateInvoiceInput: UpdateInvoiceInput,
  ) {
    return this.invoiceService.update(id, updateInvoiceInput);
  }

  @Mutation(() => Invoice)
  removeInvoice(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceService.remove(id);
  }
}
