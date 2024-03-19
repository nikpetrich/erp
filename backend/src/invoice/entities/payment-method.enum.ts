import { registerEnumType } from '@nestjs/graphql';

export enum PaymentMethod {
  EC = 'EC',
  Transfer = 'Überweisung',
  Cash = 'Barzahlung',
}

registerEnumType(PaymentMethod, {
  name: 'PaymentMethod',
  description: 'The payment method',
});
