import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import styled from 'styled-components'
import {FlexFunc} from './components/ReusableStyles'

const AppDiv = styled.div `
${FlexFunc('column', 'none', 'center')}
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;
`
const App = () => {
  return (
    <AppDiv>
      <TopBar />
      <Header />
      <Content />
    </AppDiv>
  );
}

export default App;
