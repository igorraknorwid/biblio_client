import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import Text from "../UI/text/Text";
import MyBox from "../UI/margins/MyBox";
import styles from "./Progress.module.scss";

const Progress: FC = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }, []);
  return (
    <div className={styles.progress}>
      <MyBox marginTop={100}>
        <Text text='This page in progress' />
      </MyBox>
    </div>
  );
};

export default observer(Progress);
