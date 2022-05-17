import { makeAutoObservable } from "mobx";
import ICard from "../models/ICard";

export default class Pagination {
  total: number;
  page: number;
  filteredCards: ICard[];
  selectValue: string;

  constructor(length: number, page = "1", cards: ICard[], selectValue: string) {
    makeAutoObservable(this);
    this.total = length;
    this.page = Number(page);
    this.filteredCards = cards;
    this.selectValue = selectValue;
  }

  get limit() {
    return Number(this.selectValue);
  }

  get pages() {
    return Math.ceil(this.total / this.limit);
  }

  get top() {
    return this.page < this.pages + 1 && this.page > 0
      ? this.limit * this.page
      : this.limit * 1;
  }

  get bottom() {
    return this.top - this.limit;
  }

  get limitedCards() {
    return this.filteredCards.slice(this.bottom, this.top);
  }
}
