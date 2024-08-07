import { useEffect, useState } from 'react';
import { getBooks } from '@mystore/books-data-access';
import { Books } from '@mystore/books/ui';
import { IBook } from '@mystore/shared/model';

export function FeatureBooks() {
  const [books, setBooks] = useState<IBook[]>([]);
  useEffect(
    () => {
      getBooks().then(setBooks);
    },
    [
      // This effect runs only once on first component render
      // so we declare it as having no dependent state.
    ]
  );
  return (
    <>
      <h2>Books</h2>
      <Books books={books} onAdd={(book) => alert(`Add bool ${book.title}`)} />
    </>
  );
}

export default FeatureBooks;
