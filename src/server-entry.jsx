import React from "react";
import Application from "./main";
import { renderToPipeableStream } from 'react-dom/server';

export const render = (url, res) => {
  res.socket.on("error", (error) => {
    console.error("Fatal", error);
  });
  const { pipe, abort } = renderToPipeableStream(
    <Application script="src/client-entry.jsx" />,
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