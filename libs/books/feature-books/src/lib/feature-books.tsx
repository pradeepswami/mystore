import styles from './feature-books.module.css';
import { useEffect, useState } from 'react';
import { getBooks } from '@mystore/books-data-access';
import { Books } from '@mystore/books/ui';

export function FeatureBooks() {
  const [books, setBooks] = useState<any[]>([]);
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
      <Books books={books} />
    </>
  );
}

export default FeatureBooks;
