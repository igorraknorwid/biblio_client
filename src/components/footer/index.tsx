import { FC } from "react";
import { observer } from "mobx-react-lite";
import { isMobile } from "react-device-detect";
import styles from "./index.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={isMobile ? styles.mobile_container : styles.container}>
        <h2 className={isMobile ? styles.mobile_title : styles.title}>
          Created by Igor Rak
        </h2>
      </div>
    </footer>
  );
};

export default observer(Footer);
