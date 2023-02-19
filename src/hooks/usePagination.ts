interface Props {
  count: number;
  page: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
  siblingCount?: number;
  boundaryCount?: number;
}

const usePagination = ({
  count,
  page,
  onPageChange,
  disabled,
  siblingCount,
  boundaryCount,
}: Props) => {
  const range = (start, end) => {
    const lenght = end - start + 1;

    return Array.from({ length }).map((_, index) => index + start);
  };
  //range (2,5) = [2,3,4,5]
  const startPage = 1;
  const endPage = count;
};

export default usePagination;
