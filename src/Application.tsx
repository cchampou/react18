import React, {Suspense, lazy, FC} from "react";
import MyInput from "./components/input/Input";

// @ts-ignore
const Title = lazy(() => import('./components/title/Title'));

type ApplicationProps = {
  script: string
  stylesheets: string[]
}

const Application: FC<ApplicationProps> = ({ script, styleSheets }) => {
  return (
    <html lang="en">
    <head>
      <title>React 18</title>
      <meta charSet="UTF-8"/>
      {Array.isArray(styleSheets) && styleSheets.map(url => <link rel="stylesheet" href={url} key={url} />)}
    </head>
    <body>
    <div id="app">
      <Suspense fallback={<p>Waiting data</p>}>
        <Title>Hello world !</Title>
      </Suspense>
      <MyInput />
    </div>
    <script type="module" src={script}></script>
    </body>
    </html>
  );
}

export default Application;