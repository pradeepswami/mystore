import { ICart } from '@mystore/shared/model';

export async function checkout(cart: ICart): Promise<any> {
  const data = await fetch('/api/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cart),
  });

  return data.json;
}
