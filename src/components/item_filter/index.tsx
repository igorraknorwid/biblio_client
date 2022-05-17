import { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { isMobile } from "react-device-detect";
import { Context } from "../../index";
import styles from "./index.module.scss";

const ItemFilter = () => {
  const { cards } = useContext(Context);
  return (
    <div>
      {cards.itemFilter.map((item) => (
        <button
          key={item.title}
          className={item.checked ? styles.btn_active : styles.btn}
          onClick={() => {
            cards.setCheckedItem(item.title);
          }}
        >
          {item.title} {item.title === cards.all ? null : item.total}
        </button>
      ))}
    </div>
  );
};

export default observer(ItemFilter);
