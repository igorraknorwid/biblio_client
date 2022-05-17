import { makeAutoObservable } from "mobx";
import axios from "axios";
import IYears from "../models/IYears";
export default class Years {
  years: IYears[] = [];
  isLoading = false;
  error: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setYears(years: IYears[]) {
    this.years = years;
  }

  setIsLoading(bool: boolean) {
    this.isLoading = bool;
  }

  setErrror(msg: string) {
    this.error = msg;
  }

  async fetchYears() {
    this.setIsLoading(true);
    try {
      const res = await axios.get(
        "https://salty-springs-71498.herokuapp.com/api/active"
      );
      this.setYears(res.data);
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      alert(message);
    } finally {
      this.setIsLoading(false);
    }
  }
  get sortedYears() {
    return [...this.years].sort((a: IYears, b: IYears) =>
      a.title.localeCompare(b.title)
    );
  }
}
