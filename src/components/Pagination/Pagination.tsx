import { FC } from 'react';
import { Button, PageNumber, PaginationContainer } from './pagination.styles.ts';

interface IPaginationProps {
  page: number;
  onNext: () => void;
  onPrev: () => void;
  isPrevDisabled?: boolean;
  isNextDisabled?: boolean;
}

const Pagination: FC<IPaginationProps> = ({ page, onNext, onPrev, isPrevDisabled, isNextDisabled }) => {
  return (
    <PaginationContainer>
      <Button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          onPrev();
        }}
        disabled={isPrevDisabled}
      >
        Назад
      </Button>
      <PageNumber>Страница {page}</PageNumber>
      <Button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          onNext();
        }}
        disabled={isNextDisabled}
      >
        Вперед
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
