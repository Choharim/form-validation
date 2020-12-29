import React from "react";
import FormPage from "../src/pages/index";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <FormPage />
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
  margin:0;
  padding:0;
  box-sizing:border-box;
  }
`;
