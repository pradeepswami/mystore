import { useEffect, useState } from 'react';
import { getBooks } from '@mystore/books-data-access';
import { Books } from '@mystore/books/ui';
import { IBook } from '@mystore/shared/model';
import { useDispatch } from 'react-redux';
import { cartActions } from '@mystore/cart/cart-data-access';

export function FeatureBooks() {
  const [books, setBooks] = useState<IBook[]>([]);
  const dispatch = useDispatch();
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
      <Books
        books={books}
        onAdd={(book) =>
          dispatch(
            cartActions.add({
              id: book.id,
              description: book.title,
              cost: book.price,
            })
          )
        }
      />
    </>
  );
}

export default FeatureBooks;
