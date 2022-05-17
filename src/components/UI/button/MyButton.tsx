import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import styles from "./MyButton.module.scss";

interface IMyButton {
  marginTop?: number;
  text: string;
  arrow?: boolean;
  usual?: boolean;
  link: string;
  hub?: boolean;
}

const MyButton: FC<IMyButton> = ({
  text,
  arrow = false,
  marginTop,
  link,
  usual = false,
}) => {
  const navigate = useNavigate();
  const nextStep = () => {
    navigate(link);
  };
  const getError = () => {
    alert("Provide City to");
  };
  return (
    <button
      className={usual ? styles.btn_next : styles.btn}
      style={{ marginTop: `${marginTop}px` }}
      onClick={nextStep}
    >
      <div className={styles.btn__box}>
        <div>{text}</div>
        {arrow && <img src='./svg/arrow-right.svg' alt='#' />}
      </div>
    </button>
  );
};

export default observer(MyButton);
