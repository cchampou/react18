import React, { Suspense, lazy } from "react";
import MyInput from "./useId";

const Title = lazy(() => import('./components/title/Title.jsx'));

const Application = ({ script, styleSheets }) => {

  return (
    <html lang="en">
    <head>
      <title>React 18</title>
      <meta charSet="UTF-8"/>
      {Array.isArray(styleSheets) && styleSheets.map(sheet => <link rel="stylesheet" href={sheet} />)}
    </head>
    <body>
    <div id="app">
      <Suspense fallback={<div />}>
        <Title>Hello world !</Title>
        <MyInput />
      </Suspense>
    </div>
    <script type="module" src={script}></script>
    </body>
    </html>
  );
}

export default Application;