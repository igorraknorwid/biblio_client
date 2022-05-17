import { FC, useContext } from "react";
import { isMobile } from "react-device-detect";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import styles from "./index.module.scss";

const LetterFilter = () => {
  const { cards } = useContext(Context);
  return (
    <div>
      {cards.letterFilter.map((letter) =>
        letter.find ? (
          <button
            key={letter.title}
            className={letter.checked ? styles.btn_active : styles.btn}
            onClick={() => {
              cards.setChoosedLetter(letter.title);
            }}
          >
            {letter.title} {letter.title === cards.all ? null : letter.total}
          </button>
        ) : null,
      )}
    </div>
  );
};

export default observer(LetterFilter);
