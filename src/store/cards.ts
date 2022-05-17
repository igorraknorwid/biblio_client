import axios from "axios";
import { runInAction, makeAutoObservable } from "mobx";
import { alfabet } from "../utils/alfabet";
import ICard from "../models/ICard";
import Pagination from "./pagination";

export default class Cards {
  all = "all";
  cards: ICard[] = [];
  isLoading = false;
  cardsAlfabet = alfabet;
  checkedItem = this.all;
  choosedLetter = this.all;
  select = "5";
  page = "1";

  constructor() {
    makeAutoObservable(this);
  }

  setInit() {
    this.checkedItem = this.all;
    this.choosedLetter = this.all;
  }

  setPage(page: string) {
    this.page = page;
  }

  setCards(cards: ICard[]) {
    this.cards = cards;
  }
  setIsLoading(bool: boolean) {
    this.isLoading = bool;
  }

  async fetchCardsByYear(year: string) {
    this.setIsLoading(true);
    try {
      const res = await axios.get(
        `https://salty-springs-71498.herokuapp.com/api/card/${year}`
      );
      this.setCards(res.data);
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      alert(message);
    } finally {
      this.setIsLoading(false);
    }
  }

  setSelect(value: string) {
    this.select = value;
  }

  setCheckedItem(item: string) {
    if (item === this.checkedItem) {
      this.checkedItem = this.all;
    } else {
      this.checkedItem = item;
    }
    this.choosedLetter = this.all;
    this.page = "1";
  }

  setChoosedLetter(letter: string) {
    if (letter === this.choosedLetter) {
      this.choosedLetter = this.all;
    } else {
      this.choosedLetter = letter;
    }

    this.page = "1";
  }

  get itemFilter() {
    const items = this.cards.map((card) => card.item);
    const set = Array.from(new Set(items));
    const allItems = [this.all, ...set];
    const arr = allItems.map((item) => {
      const total = this.cards.filter((card) => card.item === item).length;
      if (item === this.checkedItem) {
        return { title: item, checked: true, total };
      } else {
        return { title: item, checked: false, total };
      }
    });

    return arr;
  }

  get filteredCards() {
    return [...this.cards]
      .sort((a: ICard, b: ICard) => a.author.localeCompare(b.author))

      .filter((card) => {
        if (this.checkedItem === this.all) {
          return true;
        } else {
          return card.item === this.checkedItem;
        }
      })
      .filter((card) => {
        if (this.choosedLetter === this.all) {
          return true;
        } else {
          return card.letter === this.choosedLetter;
        }
      });
  }

  get filteredByItemCards() {
    return [...this.cards]
      .sort((a: ICard, b: ICard) => a.author.localeCompare(b.author))

      .filter((card) => {
        if (this.checkedItem === this.all) {
          return true;
        } else {
          return card.item === this.checkedItem;
        }
      });
  }

  get pagination() {
    return new Pagination(
      this.filteredCards.length,
      this.page,
      this.filteredCards && this.filteredCards,
      this.select
    );
  }

  get letterFilter() {
    return [...this.cardsAlfabet].map((letter) => {
      const find = this.filteredByItemCards.find((el) => el.letter === letter);
      const total = this.filteredByItemCards.filter(
        (card) => card.letter === letter
      ).length;
      if (find || letter === this.all) {
        if (letter === this.choosedLetter) {
          return { title: letter, checked: true, find: true, total };
        } else {
          return { title: letter, checked: false, find: true, total };
        }
      } else {
        if (letter === this.choosedLetter) {
          return { title: letter, checked: true, find: false, total };
        } else {
          return { title: letter, checked: false, find: false, total };
        }
      }
    });
  }
}
