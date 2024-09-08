
interface OrderDto {
  property: string;
  direction: string;
}


export class SearchCriteriaModel {
  minPrice?: number;
  maxPrice?: number;
  title?: string;
  startDate?: string;
  endDate?: string;
  category?: string;
  pageNumber?: number;
  pageSize?: number;
  orders: OrderDto[] = [];

  constructor(init?: Partial<SearchCriteriaModel>) {
    Object.assign(this, init);
  }
}

