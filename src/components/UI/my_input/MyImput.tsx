import React, { FC, ChangeEvent } from "react";
import { observer } from "mobx-react-lite";
import { isMobile } from "react-device-detect";
import styles from "./MyInput.module.scss";

interface IMyInput {
  value: string;
  handleInput(e: ChangeEvent<HTMLInputElement>): void;
  src: string;
  placeholder: string;
  alt?: string;
  minWidth?: number;
}

const MyInput: FC<IMyInput> = ({
  value,
  handleInput,
  src,
  placeholder,
  alt = "#",
  minWidth = 460,
}) => {
  return (
    <div className={styles.input_box}>
      <div className={styles.img_box}>
        <img className={styles.img} src={src} alt={alt} />
      </div>
      <input
        style={isMobile ? { minWidth: "20%" } : { minWidth: `${minWidth}px` }}
        className={styles.input}
        placeholder={placeholder}
        type='text'
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleInput(e);
        }}
      />
    </div>
  );
};

export default observer(MyInput);
