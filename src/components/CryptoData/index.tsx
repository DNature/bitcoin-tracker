import React, { useContext, useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import cryptoCurrencyCTX from "../../context/cryptocurrency/cryptoCurrencyContext";
import { TradingSignals } from "../type";
import Analysis from "./Analysis";
import CryptoTimeSeries from "./CryptoTimeSeries";
import ErrorNoData from "./ErrorNoData";
import News from "./News";
import Trades from "./Trades";

export default function CryptoData() {
  const cryptoCTX = useContext(cryptoCurrencyCTX);
  const {
    tradingSignals,
    getTradingSignals,
    loading,
    searchAsset,
    getDailyOHLCV,
    dailyOHLCV,
    news,
    getNews,
  }: {
    tradingSignals: TradingSignals;
    getTradingSignals: Function;
    getDailyOHLCV: Function;
    getNews: Function;
    dailyOHLCV: any;
    searchAsset: any;
    news: any;
    loading: Boolean;
  } = cryptoCTX;

  useEffect(() => {
    getTradingSignals(searchAsset.symbol);
    getDailyOHLCV("180", searchAsset.symbol);
    getNews();

    // eslint-disable-next-line
  }, [searchAsset, loading, news.length !== 0]);

  return (
    <Tabs className="column crypto-data">
      <TabList className="tab tab-block">
        <Tab className="tab-item active">Overview</Tab>
        <Tab className="tab-item active">Analysis</Tab>
        <Tab className="tab-item active">News</Tab>
        <Tab className="tab-item active">Trades</Tab>
        <Tab className="tab-item active">Timeline</Tab>
      </TabList>

      <TabPanel>
        <CryptoTimeSeries
          getDailyOHLCV={getDailyOHLCV}
          dailyOHLCV={dailyOHLCV}
          symbol={searchAsset.symbol}
        />
      </TabPanel>
      <TabPanel>
        {Object.keys(tradingSignals).length !== 0 ? (
          <Analysis tradingSignals={tradingSignals} />
        ) : (
          <ErrorNoData />
        )}
      </TabPanel>
      <TabPanel>
        <News news={news} />
      </TabPanel>
      <TabPanel>
        <Trades symbol={searchAsset.symbol} />
      </TabPanel>
      <TabPanel>
        <h2>Timeline</h2>
      </TabPanel>
    </Tabs>
  );
}
