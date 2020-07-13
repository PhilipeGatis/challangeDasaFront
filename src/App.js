import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';
import SearchResult from './components/SearchResult';
import Index from './components/SearchContent';
import UserHeader from './components/UserHeader';
import Snackbar from './components/Snackbar';
import styled from 'styled-components';

const { Header, Content } = Layout;

const StyledLayout = styled(Layout)`
  height: 100%;
`;

const StyledContent = styled(Content)`
  padding: 24px;
  margin: 0;
`;

function App() {
  return (
    <Router>
      <StyledLayout className="layout">
        <Switch>
          <Route path="/:user">
            <Header className="header">
              <UserHeader />
            </Header>
          </Route>
        </Switch>
        <Layout style={{ padding: '0 24px 24px' }}>
          <StyledContent>
            <Switch>
              <Route path="/:user" component={SearchResult} />
              <Route path="/" component={Index} />
            </Switch>
          </StyledContent>
        </Layout>
      </StyledLayout>
      <Snackbar />
    </Router>
  );
}

export default App;
