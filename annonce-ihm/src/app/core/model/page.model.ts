interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export class Page<T>  {
  content: T[];
  pageable: Pageable;
  sort: Sort;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
  numberOfElements: number;
  empty: boolean;

  constructor() {
    this.content = [];
    this.pageable = {
      sort: {
        sorted: false,
        unsorted: true,
        empty: true
      },
      offset: 0,
      pageNumber: 0,
      pageSize: 10,
      paged: true,
      unpaged: false
    };
    this.sort = {
      sorted: false,
      unsorted: true,
      empty: true
    };
    this.last = false;
    this.totalPages = 0;
    this.totalElements = 0;
    this.first = true;
    this.size = 10;
    this.number = 0;
    this.numberOfElements = 0;
    this.empty = true;
  }
}

