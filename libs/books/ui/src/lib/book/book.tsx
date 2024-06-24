import { Button } from '@mystore/core-ui';
import { IBook } from '@mystore/shared/model';
import styled from 'styled-components';
export interface BookProps {
  book: IBook;
  onAdd: (book: any) => void;
}
const StyledBook = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
  > span {
    padding: 1rem 0.5rem;
    margin-right: 0.5rem;
  }
  .title {
    flex: 1;
  }
  .price {
    color: #478d3c;
  }
`;

export const Book = ({ book, onAdd }: BookProps) => {
  const handleAdd = () => onAdd(book);
  return (
    <StyledBook>
      <span className="title">
        {book.title} by <em>{book.author}</em>
      </span>
      <span className="price">${book.price}</span>
      <span>
        <Button onClick={handleAdd}>Add to cart</Button>
      </span>
    </StyledBook>
  );
};
export default Book;
