import { useEffect, useRef,  useState } from "react";
import { useCurrencryStore } from "../../store/CurrencrySlice";
import CurrencryList from "../CurrencryListUi/CurrencryList";
import LoadingSpinner from "../../components/loading";

const CurrencryUi = () => {
  const [recordPage, setRecordPage] = useState<number>(12);
  const [infiniteLoading, setInifiniteLoading] = useState(false);

  const {
    currencryApi,
    loading: loadingApi,
    currencryData,
    selected,
    selectStore,
  } = useCurrencryStore();

  //Apicall
  useEffect(() => {
    currencryApi();
  }, [loadingApi]);

  //loadMore

  function loadMore() {
    setInifiniteLoading(true);

    if (recordPage > currencryData.length) {
      setInifiniteLoading(false);
      return;
    }

    setTimeout(() => {
      setRecordPage((prev) => prev + 50);

      setInifiniteLoading(false);
    }, 2000);
  }

  //infinite scroll
  const Observer: any = useRef(null);

  const lastPostRef = (node: any) => {
    if (Observer.current) Observer.current?.disconnect();

    Observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMore();
      }
    });

    if (node) Observer.current.observe(node);
  };

  return (
    <div>
      {loadingApi ? (
        <div className="h-screen flex aligin">
          <LoadingSpinner />
        </div>
      ) : (
        <CurrencryList
          selected={selected}
          selectStore={selectStore}
          recordPage={recordPage}
          data={currencryData}
        />
      )}

      {infiniteLoading ? (
        <>
          <LoadingSpinner />
        </>
      ) : (
        <div className="text-center" ref={lastPostRef}></div>
      )}
    </div>
  );
};

export default CurrencryUi;
