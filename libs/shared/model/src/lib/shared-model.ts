export function sharedModel(): string {
  return 'shared-model';
}

export interface IBook {
  id: number;
  title: string;
  author: string;
  rating: number;
  price: number;
}
