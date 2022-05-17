import { FC, useContext } from "react";
import { isMobile } from "react-device-detect";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import styles from "./index.module.scss";

const Pagination: FC = () => {
  const { cards } = useContext(Context);
  const pageArr = Array.from({ length: cards.pagination.pages }, (v, k) => k);
  const currentArr =
    Number(cards.page) > 0 && Number(cards.page) < 6
      ? pageArr.slice(0, 5)
      : pageArr.slice(Number(cards.page) - 3, Number(cards.page) + 2);

  return (
    <div className={styles.box}>
      <button
        className={styles.btn}
        onClick={() => {
          const prev =
            cards.page === "1" ? cards.page : (+cards.page - 1).toString();
          cards.setPage(prev);
        }}
      >
        prev
      </button>

      {Number(cards.page) > 5 && (
        <button
          className={styles.btn}
          onClick={() => {
            cards.setPage("1");
          }}
        >
          1
        </button>
      )}
      {Number(cards.page) > 5 && (
        <button
          className={styles.btn}
          onClick={() => {
            cards.setPage("2");
          }}
        >
          2
        </button>
      )}
      {Number(cards.page) > 5 && "..."}
      {}
      {currentArr.map((num, index) => {
        const page = num + 1;

        return (
          <button
            key={num}
            className={
              page.toString() === cards.page ? styles.btn_active : styles.btn
            }
            onClick={() => cards.setPage(page.toString())}
          >
            {page}
          </button>
        );
      })}
      {pageArr.length > 4 && <span>...</span>}
      {pageArr.length > 4 && (
        <button
          className={styles.btn}
          onClick={() => {
            cards.setPage(pageArr.length.toString());
          }}
        >
          {pageArr.length.toString()}
        </button>
      )}
      <button
        className={styles.btn}
        onClick={() => {
          const next =
            cards.page === pageArr.length.toString()
              ? pageArr.length.toString()
              : (+cards.page + 1).toString();
          cards.setPage(next);
        }}
      >
        next
      </button>
    </div>
  );
};

export default observer(Pagination);
