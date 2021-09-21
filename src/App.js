import React from "react";
import { Switch, Route } from "react-router";
import Layout from "./layout/Layout";
import {
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
  Exchanges,
} from "./pages";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/exchanges" component={Exchanges} />
        <Route exact path="/cryptocurrencies" component={Cryptocurrencies} />
        <Route exact path="/crypto/:coinId" component={CryptoDetails} />
        <Route exact path="/news" component={News} />
      </Switch>
    </Layout>
  );
};

export default App;
