import { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { isMobile } from "react-device-detect";
import { Context } from "../../index";
import styles from "./index.module.scss";

const MySelect: FC = () => {
  const { cards } = useContext(Context);
  return (
    <div>
      <select
        value={cards.select}
        onChange={(e) => {
          cards.setSelect(e.target.value);
        }}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
    </div>
  );
};

export default observer(MySelect);
