import { create } from "zustand";
import { listCurrencry } from "../services/api";
import { v4 as uuidv4 } from "uuid";
import { iconFig } from "../icons/iconConfig";

interface ICurrencry {
  currencryData: any;
  loading: boolean;
  message: any | string;
  currencryApi: () => Promise<void>;
  selected: any;
  selectStore: (id:string)=>void
}

export const useCurrencryStore = create<ICurrencry>((set) => ({
  currencryData: [],
  loading: true,
  message: "",
  selected: [],
  currencryApi: async () => {
    const list = await listCurrencry();

    const factory = Object?.entries(list?.data?.quotes).map(([key, value]) => {
      let name = key.split("USD")[1].toLowerCase();

      let factoryObj = {
        [`${key}`]: value,
        id: uuidv4(),
        from: "USD",
        exchangeRate: value,
        to: key.split("USD")[1],
        name: key.split("USD")[1],
      };

      if (iconFig[name]) {
        Object.assign(factoryObj, {
          img: iconFig[name],
        });
      }

      return factoryObj;
    });

    set({ currencryData: factory, loading: false });
  },
  selectStore: (id: string) => {
    set((state) => {
      const newSelected = state.currencryData.find(
        (item: any) => item.id === id
      );
      return { ...state, selected: [...state.selected, { ...newSelected }] };
    });
  },

}));
