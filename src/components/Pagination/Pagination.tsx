import React from "react";
import styled from "@emotion/styled/macro";
import usePagination from "./usePagination";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { AiOutlineEllipsis } from "react-icons/ai";

interface Props {
  count: number;
  page: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
  siblingCount?: number;
  boundaryCount?: number;
}

const Navigation = styled.nav``;

const Button = styled.button<{ selected?: boolean }>`
  color: ${({ selected }) => (selected ? "#fff" : "#000")};
  border: 0;
  margin: 0;
  padding: 8px 12px;
  font-size: 16px;
  font-weight: normal;
  background-color: ${({ selected }) => (selected ? "#3d6afa" : "#fff")};
  cursor: pointer;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  &:hover {
    background-color: #ccc;
    color: #fff;
  }
  &:active {
    opacity: 0.8;
  }
`;

const Item = styled.li``;

const ItemList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  ${Item} + ${Item} {
    margin-left: 8px;
  }
`;

const Pagination: React.FC<Props> = ({
  count,
  page,
  onPageChange,
  disabled,
  siblingCount = 1,
  boundaryCount = 1,
}) => {
  const getLabel = (item: number | string) => {
    if (typeof item === "number") return item;
    else if (item.indexOf("ellipsis") > -1)
      return <AiOutlineEllipsis></AiOutlineEllipsis>;
    else if (item.indexOf("prev") > -1)
      return <GrFormPrevious></GrFormPrevious>;
    else if (item.indexOf("next") > -1) return <GrFormNext></GrFormNext>;
    else {
      return item;
    }
  };

  const { items } = usePagination({
    count,
    page,
    onPageChange,
    disabled,
    siblingCount,
    boundaryCount,
  });

  return (
    <Navigation>
      <ItemList>
        {items.map(({ key, disabled, selected, item, onClick }) => (
          <Item key={key}>
            <Button selected={selected} disabled={disabled} onClick={onClick}>
              {getLabel(item)}
            </Button>
          </Item>
        ))}
      </ItemList>
    </Navigation>
  );
};

export default Pagination;
