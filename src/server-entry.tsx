import React from "react";
import Application from "./Application";
import { renderToPipeableStream } from 'react-dom/server';
import { create } from 'filehound';
import {DataProvider} from "./data";

export const render = (url, res) => {
  res.socket.on("error", (error) => {
    console.error("Fatal", error);
  });
  const fh = create();
  const styleSheets = fh.depth(10).path('src').ext('.css').findSync();
  const serverData = createServerData();
  const { pipe } = renderToPipeableStream(
    <DataProvider data={serverData}>
      <Application script="src/client-entry.tsx" styleSheets={styleSheets} />
    </DataProvider>,
    {
      onCompleteShell() {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        pipe(res);
      },
      onError(x) {
        console.error(x);
      }
    }
  );
}

const createServerData = () => {
  let done = false;
  return {
    read: () => {
      if (done) return;
      throw new Promise((resolve) => {
        setTimeout(() => {
          done = true;
          resolve();
        }, 5000);
      });
    }
  };
};