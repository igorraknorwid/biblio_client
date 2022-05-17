import React, { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { isMobile } from "react-device-detect";
import expand from "../../../images/expand-arrows.png";
import Modal from "../../card_modal";
import ICard from "../../../models/ICard";
import styles from "./index.module.scss";

interface ICardsItem {
  card: ICard;
}

const CardsItem: FC<ICardsItem> = ({ card }) => {
  const { author, url, year, item, note, link } = card;
  const [isVisible, setIsVisible] = React.useState(false);
  const Author = author[0].toUpperCase() + author.slice(1);
  const showModal = () => {
    setIsVisible(true);
  };
  const hideModal = () => {
    setIsVisible(false);
  };
  return (
    <div className={styles.card}>
      <div className={styles.card_img_box}>
        <img src={url} alt={Author} className={styles.card_img} />
      </div>
      <div className={styles.card_info}>
        <div className={styles.card_info__upper}>
          <div className={styles.card_info__left}>
            <div className={styles.card_item}>{year}</div>
            <div className={styles.card_item}>{Author}</div>
          </div>

          <div>
            {link && (
              <a
                href={link}
                target='_blank'
                className={styles.card_hash}
                rel='noreferrer'
              >
                Link
              </a>
            )}
            <button className={styles.modal_open} onClick={showModal}>
              <img src={expand} className={styles.modal_logo} alt='expand' />
            </button>
          </div>
        </div>
        <div>
          <div className={styles.card_hash}>{item}</div>
          {note && <div className={styles.card_hash}>{note}</div>}
        </div>
      </div>
      {isVisible && <Modal card={card} hideModal={hideModal} />}
    </div>
  );
};

export default observer(CardsItem);
