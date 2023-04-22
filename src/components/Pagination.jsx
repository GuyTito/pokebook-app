import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getPageSize } from "../store/pageSlice";
import { getPokemons, updateCurrentPokemons } from "../store/pokemonSlice";
import { getThemeColor } from "../store/themeSlice";

export default function Pagination() {
  const itemsPerPage = useSelector(getPageSize);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const dispatch = useDispatch();
  const pokemons = useSelector(getPokemons);
  const themeColor = useSelector(getThemeColor);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    dispatch(updateCurrentPokemons({ itemOffset, endOffset }));
    setPageCount(Math.ceil(pokemons.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, pokemons]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % pokemons.length;
    setItemOffset(newOffset);
  };

  return (
    <Div themeColor={themeColor}>
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        breakLabel="•••"
        containerClassName="pagination"
        activeLinkClassName="active"
        breakClassName="ellipses"
        pageLinkClassName="page-item"
        previousLinkClassName="page-item"
        nextLinkClassName="page-item"
        // pageClassName="page-item"
        // previousClassName="page-item"
        // nextClassName="page-item"
        // breakLinkClassName="ellipses"
      />
    </Div>
  );
}

const Div = styled.div`
  .pagination {
    display: flex;
    gap: 10px;

    .page-item {
      background-color: #e1e1e1;
      border-radius: 8px;
      padding: 10px 16px;
      font-family: var(--font-clash);
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;

      &:hover {
        background: #cbcbcb;
      }

      .right-arrow {
        rotate: 180deg;
      }
    }
    .active {
      background: ${(props) => `${props.themeColor}`};
      color: white;

      &:hover {
        background: ${(props) => `${props.themeColor}`};
        opacity: 0.8;
      }
    }
  }
`;
