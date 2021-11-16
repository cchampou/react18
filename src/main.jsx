import React from "react";
import MyInput from "./useId";
import Title from "./components/title/Title";

const Application = ({ script }) => {

  return (
    <html lang="en">
    <head>
      <title>React 18</title>
      <meta charSet="UTF-8"/>
    </head>
    <body>
    <div id="app">
      <Title>Hello world !</Title>
      <MyInput />
    </div>
    <script type="module" src={script}></script>
    </body>
    </html>
  );
}

export default Application;