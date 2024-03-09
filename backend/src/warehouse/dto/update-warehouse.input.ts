import { InputType, PartialType } from '@nestjs/graphql';
import { CreateWarehouseInput } from './create-warehouse.input';

@InputType()
export class UpdateWarehouseInput extends PartialType(CreateWarehouseInput) {}
