import React from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
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
        <Route  path='/'>
          <div className='h-full w-full flex gap-8 flex-col justify-center items-center font-semibold text-4xl'>
            404 Page Not Found
            <Link className='text-lg text-blue-600 hover:text-blue-700' to='/'>Back to Home Page</Link>
          </div>
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
