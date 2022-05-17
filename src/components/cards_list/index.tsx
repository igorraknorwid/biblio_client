import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { isMobile } from "react-device-detect";
import { Context } from "../../index";
import styles from "./index.module.scss";
import CardsItem from "./card_item";

const CardsList = () => {
  const { cards } = useContext(Context);
  const location = useLocation();
  const arr = location.pathname.split("/");
  const year = arr[arr.length - 1];

  useEffect(() => {
    if (year) {
      cards.fetchCardsByYear(year);
    }
  }, []);

  useEffect(() => {
    cards.setInit();
  }, []);

  if (cards.isLoading) {
    return <div className={styles.cards}>...LOADING</div>;
  }

  return (
    <div className={styles.cards}>
      {cards.pagination.limitedCards.map((card) => (
        <CardsItem key={card._id} card={card} />
      ))}
    </div>
  );
};

export default observer(CardsList);
