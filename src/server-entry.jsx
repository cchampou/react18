import React from "react";
import Application from "./main";
import { renderToPipeableStream } from 'react-dom/server';
import * as fs from "fs";
import FileHound from 'filehound';

export const render = (url, res) => {
  res.socket.on("error", (error) => {
    console.error("Fatal", error);
  });
  const filehound = FileHound.create();
  const styleSheets = filehound.depth(10).path('src').ext('.css').findSync();
  const { pipe } = renderToPipeableStream(
    <Application script="src/client-entry.jsx" styleSheets={styleSheets} />,
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