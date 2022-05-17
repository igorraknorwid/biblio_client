import React, { Component, MouseEvent } from "react";
import { observer } from "mobx-react-lite";
import ICard from "../../models/ICard";
import styles from "./index.module.scss";

interface IModalProps {
  card: ICard;
  hideModal(): void;
}

const Modal: React.FC<IModalProps> = ({ card, hideModal }) => {
  const author = card.author[0].toUpperCase() + card.author.slice(1);
  return (
    <div className={styles.modal}>
      <div>
        <img src={card.url} alt={card.author} />
      </div>
      <button className={styles.modal_close} onClick={hideModal}>
        &#10005;
        {/* <span className={styles.modal_btn_span}>&#10005;</span> */}
      </button>
    </div>
  );
};

export default observer(Modal);
