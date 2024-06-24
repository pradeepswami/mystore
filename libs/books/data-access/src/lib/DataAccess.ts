import {IBook} from '@mystore/shared/model'


export function dataAccess(): string {
  return 'data-access';
}

export async function getBooks(): Promise<IBook[]> {
  const data = await fetch('/api/books', {
    headers: {
    'Content-Type': 'application/json'
    }
    });
    return data.json();
  };