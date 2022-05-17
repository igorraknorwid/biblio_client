import { FC, useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Context } from "../../index";
import styles from "./index.module.scss";

const Years: FC = () => {
  const { years } = useContext(Context);
  useEffect(() => {
    years.fetchYears();
  }, []);
  return (
    <div className={styles.box}>
      {years.sortedYears.map((year) => {
        return (
          <div className={styles.item} key={year._id}>
            <Link to={`/${year.title}`}>{year.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default observer(Years);
