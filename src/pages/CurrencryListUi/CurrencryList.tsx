import { inputBox, cardListBox } from "./style";
import CardList from "./card";
import Header from "../../components/header";
import React from "react";

const CurrencryList = React.memo(({ data,recordPage,selected,selectStore }: any) => {

  
  return (
    <div>
      <Header />
      <div className={inputBox()}>
        <input
          placeholder="search currency"
          type="text"
          className="outline-none"
        />
      </div>
      <div className={cardListBox()}>
        {data?.slice(0,recordPage).map((item: any) => (
          <CardList selected={selected} selectStore={selectStore} key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
});

export default CurrencryList;
