import React, { Component } from 'react';
import { Page, Header, Content, Footer, NewsItem } from './components';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <Page>
              <div>
                <Header />
                <Content id="16983195">
                </Content>
              </div>
              <Footer />
            </Page>
          </BrowserRouter>
        );
    }
}

export default App;
