import React, { Component } from 'react';
import { Page, Header, Content, Footer, NewsItem, NewsItemList } from './components';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { api } from './utils';

class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <Page>
              <div>
                <Header />
                <Content>
                  <Switch>
                    <Route exact path="/" render={() => <NewsItemList ids={api.getItemsIds()} />} />
                    <Route path="/item/:itemId" render={({match}) => <NewsItem id={[]} />} />
                  </Switch>
                </Content>
              </div>
              <Footer />
            </Page>
          </BrowserRouter>
        );
    }
}

export default App;
