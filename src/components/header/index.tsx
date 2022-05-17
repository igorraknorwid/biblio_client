import { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={isMobile ? styles.mobile_container : styles.container}>
        <div className={isMobile ? styles.mobile_title_box : styles.title_box}>
          <Link to='/'>
            {" "}
            <h1 className={styles.title}>
              Bibliografia Ziemi Lubuskiej 1945-1989
            </h1>
          </Link>
        </div>
        <div className={isMobile ? styles.mobile_link_box : styles.link_box}>
          <a
            className={styles.link}
            href='https://opac.wimbp.zgora.pl/integro/catalog'
            target='_blank'
            rel='noreferrer'
          >
            E-Katalog
          </a>
        </div>
      </div>
    </header>
  );
};

export default observer(Header);
