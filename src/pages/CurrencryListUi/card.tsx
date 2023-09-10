import React, { useState, useRef, useMemo } from "react";
import { cardListui, inputBox } from "./style";

const CardList = React.memo(
  ({
    name,
    img,
    exchangeRate,
    selected,
    selectStore,
    item,
    
  }: any) => {
    const ref = useRef<HTMLInputElement | null>(null);
    const [value, setValue] = useState<number>(0);
    const [rateValue, setRateValue] = useState<number>(0);
    let isSelected = selected.find((value: any) => value.id === item.id);

    useMemo(() => {
      setRateValue(Number(isSelected?.exchangeRate) * value);
      return Number(value);
    }, [value]);

    return (
      <div
        onClick={() => {
          if (ref.current?.defaultValue) {
            return;
          }

          selectStore(item);
        }}
        className={cardListui()}
      >
        <div>
          <img src={img} alt="" />
          <p>{name}</p>
        </div>
        <div className="mt-4 ">
          <div className="">
            <p className="text-[13px] text-[#6d6d6d]">$-Currency</p>
            <p>{value ? rateValue.toFixed(3) : exchangeRate}</p>
          </div>
          <p>-</p>
          <div className="">
            {isSelected ? (
              <input
                autoFocus
                ref={ref}
                type="number"
                onChange={(e) => {
                  if (!e.target.value) {
                    selectStore(item);
                  }
                  setValue(+e.target.value);
                }}
                className="border w-[76px] px-2 py-2 rounded focus:border-blue outline-[#42a5f5] "
                defaultValue={1}
              />
            ) : (
              <button className="bg-[#eaeaea] text-[#000] rounded px-4 py-2">
                select
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default CardList;
