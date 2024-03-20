/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String']['output'];
  clients?: Maybe<Array<Client>>;
  country: Scalars['String']['output'];
  created: Scalars['DateTime']['output'];
  customers?: Maybe<Array<Customer>>;
  houseNumber: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  modified: Scalars['DateTime']['output'];
  street: Scalars['String']['output'];
  warehouses?: Maybe<Array<Warehouse>>;
  zip: Scalars['String']['output'];
};

export type Article = {
  __typename?: 'Article';
  amount: Scalars['Int']['output'];
  created: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  manufacturer?: Maybe<Scalars['String']['output']>;
  modified: Scalars['DateTime']['output'];
  number: Scalars['String']['output'];
  originalNumber: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  warehouse: Warehouse;
};

export type Client = {
  __typename?: 'Client';
  address: Address;
  created: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  invoices?: Maybe<Array<Invoice>>;
  mail?: Maybe<Scalars['String']['output']>;
  modified: Scalars['DateTime']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type CreateAddressInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  houseNumber: Scalars['String']['input'];
  street: Scalars['String']['input'];
  zip: Scalars['String']['input'];
};

export type CreateArticleInput = {
  amount: Scalars['Int']['input'];
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  number: Scalars['String']['input'];
  originalNumber: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  title: Scalars['String']['input'];
  warehouseId: Scalars['Int']['input'];
};

export type CreateClientInput = {
  addressId: Scalars['Int']['input'];
  mail?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateCustomerInput = {
  addressId: Scalars['Int']['input'];
  mail?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateInvoiceInput = {
  additionalInfo?: InputMaybe<Scalars['String']['input']>;
  articleIds: Array<Scalars['Int']['input']>;
  clientId: Scalars['Int']['input'];
  customerId: Scalars['Int']['input'];
  discount?: InputMaybe<Scalars['Int']['input']>;
  paymentMethod: PaymentMethod;
  title: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};

export type CreateUserInput = {
  password: Scalars['String']['input'];
  role: UserRole;
  username: Scalars['String']['input'];
};

export type CreateWarehouseInput = {
  addressId: Scalars['Int']['input'];
  mail?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type Customer = {
  __typename?: 'Customer';
  address: Address;
  created: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  invoices?: Maybe<Array<Invoice>>;
  mail?: Maybe<Scalars['String']['output']>;
  modified: Scalars['DateTime']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type Invoice = {
  __typename?: 'Invoice';
  additionalInfo?: Maybe<Scalars['String']['output']>;
  articles: Array<Article>;
  client: Client;
  created: Scalars['DateTime']['output'];
  customer: Customer;
  discount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  modified: Scalars['DateTime']['output'];
  paymentMethod: PaymentMethod;
  title: Scalars['String']['output'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAddress: MutationRequestOutput;
  createArticle: MutationRequestOutput;
  createClient: MutationRequestOutput;
  createCustomer: MutationRequestOutput;
  createInvoice: MutationRequestOutput;
  createUser: MutationRequestOutput;
  createWarehouse: MutationRequestOutput;
  removeAddress: MutationRequestOutput;
  removeArticle: MutationRequestOutput;
  removeClient: MutationRequestOutput;
  removeCustomer: MutationRequestOutput;
  removeInvoice: MutationRequestOutput;
  removeUser: MutationRequestOutput;
  removeWarehouse: MutationRequestOutput;
  updateAddress: MutationRequestOutput;
  updateArticle: MutationRequestOutput;
  updateClient: MutationRequestOutput;
  updateCustomer: MutationRequestOutput;
  updateInvoice: MutationRequestOutput;
  updateUser: MutationRequestOutput;
  updateWarehouse: MutationRequestOutput;
};


export type MutationCreateAddressArgs = {
  createAddressInput: CreateAddressInput;
};


export type MutationCreateArticleArgs = {
  createArticleInput: CreateArticleInput;
};


export type MutationCreateClientArgs = {
  createClientInput: CreateClientInput;
};


export type MutationCreateCustomerArgs = {
  createCustomerInput: CreateCustomerInput;
};


export type MutationCreateInvoiceArgs = {
  createInvoiceInput: CreateInvoiceInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateWarehouseArgs = {
  createWarehouseInput: CreateWarehouseInput;
};


export type MutationRemoveAddressArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveArticleArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveClientArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveCustomerArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveInvoiceArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveWarehouseArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateAddressArgs = {
  id: Scalars['Int']['input'];
  updateAddressInput: UpdateAddressInput;
};


export type MutationUpdateArticleArgs = {
  id: Scalars['Int']['input'];
  updateArticleInput: UpdateArticleInput;
};


export type MutationUpdateClientArgs = {
  id: Scalars['Int']['input'];
  updateClientInput: UpdateClientInput;
};


export type MutationUpdateCustomerArgs = {
  id: Scalars['Int']['input'];
  updateCustomerInput: UpdateCustomerInput;
};


export type MutationUpdateInvoiceArgs = {
  id: Scalars['Int']['input'];
  updateInvoiceInput: UpdateInvoiceInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['Int']['input'];
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateWarehouseArgs = {
  id: Scalars['Int']['input'];
  updateWarehouseInput: UpdateWarehouseInput;
};

export type MutationRequestOutput = {
  __typename?: 'MutationRequestOutput';
  succeeded: Scalars['Float']['output'];
};

/** The payment method */
export enum PaymentMethod {
  Cash = 'Cash',
  Ec = 'EC',
  Transfer = 'Transfer'
}

export type Query = {
  __typename?: 'Query';
  address: Address;
  addresses: Array<Address>;
  article: Article;
  articles: Array<Article>;
  client: Client;
  clients: Array<Client>;
  customer: Customer;
  customers: Array<Customer>;
  invoice: Invoice;
  invoices: Array<Invoice>;
  user: User;
  users: Array<User>;
  warehouse: Warehouse;
  warehouses: Array<Warehouse>;
};


export type QueryAddressArgs = {
  id: Scalars['Int']['input'];
};


export type QueryArticleArgs = {
  id: Scalars['Int']['input'];
};


export type QueryClientArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCustomerArgs = {
  id: Scalars['Int']['input'];
};


export type QueryInvoiceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryWarehouseArgs = {
  id: Scalars['Int']['input'];
};

export type UpdateAddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  houseNumber?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateArticleInput = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  originalNumber?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  warehouseId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateClientInput = {
  addressId?: InputMaybe<Scalars['Int']['input']>;
  mail?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCustomerInput = {
  addressId?: InputMaybe<Scalars['Int']['input']>;
  mail?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInvoiceInput = {
  additionalInfo?: InputMaybe<Scalars['String']['input']>;
  articleIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  clientId?: InputMaybe<Scalars['Int']['input']>;
  customerId?: InputMaybe<Scalars['Int']['input']>;
  discount?: InputMaybe<Scalars['Int']['input']>;
  paymentMethod?: InputMaybe<PaymentMethod>;
  title?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateUserInput = {
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRole>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWarehouseInput = {
  addressId?: InputMaybe<Scalars['Int']['input']>;
  mail?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  created: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  invoices?: Maybe<Array<Invoice>>;
  modified: Scalars['DateTime']['output'];
  password: Scalars['String']['output'];
  role: UserRole;
  username: Scalars['String']['output'];
};

/** The user role */
export enum UserRole {
  Admin = 'Admin',
  Consultant = 'Consultant',
  Employee = 'Employee'
}

export type Warehouse = {
  __typename?: 'Warehouse';
  address: Address;
  articles?: Maybe<Array<Article>>;
  created: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  mail?: Maybe<Scalars['String']['output']>;
  modified: Scalars['DateTime']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};
