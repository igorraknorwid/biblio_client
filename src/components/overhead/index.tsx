import { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { Context } from "../../index";
import MySelect from "../../components/select";
import styles from "./index.module.scss";

const Overhead: FC = () => {
  const { cards } = useContext(Context);
  const location = useLocation();
  const arr = location.pathname.split("/");
  const currentYear = arr[arr.length - 1];
  return (
    <section className={styles.up}>
      <div className={styles.up_box}>
        <h2 className={styles.up_title}>{currentYear}</h2>
        <div>
          {cards.checkedItem && cards.checkedItem !== cards.all && (
            <b>{cards.checkedItem}</b>
          )}
        </div>
        <div>
          {cards.choosedLetter && cards.choosedLetter !== cards.all && (
            <div className={styles.up_box}>
              <div>Litera:</div>
              <div>
                <b>{cards.choosedLetter}</b>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.select_box}>
        <div>Liczba kart na stronie:</div>
        <MySelect />
      </div>
    </section>
  );
};

export default observer(Overhead);
