const fs = require("fs");
const { resolve } = require("path");
const { createServer: createViteServer } = require('vite');
const express = require('express');

async function createServer() {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: 'ssr' }
  })

  app.use(vite.middlewares)

  app.get('/', async (req, res) => {
    const url = req.originalUrl
    try {
      const { render } = await vite.ssrLoadModule('/src/server-entry.jsx')
      await render(url, res)
    } catch (e) {
      vite.ssrFixStacktrace(e)
      console.error(e)
      res.status(500).end(e.message)
    }
  })

  app.listen(3000)
}

createServer();