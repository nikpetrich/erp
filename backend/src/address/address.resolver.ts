import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MutationRequestOutput } from 'src/common/dto/mutation-request.output';
import { QueryRecordsInput } from 'src/common/dto/query-records.input';
import { AddressService } from './address.service';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';
import { Address } from './entities/address.entity';

@Resolver(() => Address)
export class AddressResolver {
  constructor(private readonly addressService: AddressService) {}

  @Mutation(() => MutationRequestOutput)
  createAddress(
    @Args('createAddressInput') createAddressInput: CreateAddressInput,
  ) {
    return this.addressService.create(createAddressInput);
  }

  @Query(() => [Address], { name: 'addresses' })
  findAll(@Args() args: QueryRecordsInput) {
    return this.addressService.findAll(args);
  }

  @Query(() => Address, { name: 'address' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.addressService.findOne(id);
  }

  @Mutation(() => MutationRequestOutput)
  updateAddress(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateAddressInput') updateAddressInput: UpdateAddressInput,
  ) {
    return this.addressService.update(id, updateAddressInput);
  }

  @Mutation(() => MutationRequestOutput)
  removeAddress(@Args('id', { type: () => Int }) id: number) {
    return this.addressService.remove(id);
  }
}
