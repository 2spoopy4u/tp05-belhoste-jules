import { Product } from '../model/product';

export class GetUsers {
    static readonly type = '[Users] Fetch';
}

export class AddProduct {
  static readonly type = '[Product] Add';

  constructor(public payload: Product) {}
}

export class DelProduct {
  static readonly type = '[Product] Del';

  constructor(public payload: Product) {}
}