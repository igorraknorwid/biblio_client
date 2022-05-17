import { FC } from "react";
import { observer } from "mobx-react-lite";
import { MobileView, BrowserView } from "react-device-detect";

import ItemFilter from "../../components/item_filter";
import LetterFilter from "../../components/letter_filter";
import CardsList from "../../components/cards_list";
import Pagination from "../../components/pagination";
import Overhead from "../../components/overhead";
import styles from "./index.module.scss";

const Cards: FC = () => {
  return (
    <>
      <BrowserView>
        <div>
          <Overhead />
          <div className={styles.box}>
            <div className={styles.content}>
              <CardsList />
              <Pagination />
            </div>
            <div className={styles.filters}>
              <div>
                <div>Sortuj według dyskryptorów:</div>
                <ItemFilter />
              </div>
              <div>
                <div>Sortuj według alfabetu:</div>
                <LetterFilter />
              </div>
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className={styles.mobile_box}>
          <Overhead />
          <ItemFilter />
          <LetterFilter />
          <CardsList />
          <Pagination />
        </div>
      </MobileView>
    </>
  );
};

export default observer(Cards);
