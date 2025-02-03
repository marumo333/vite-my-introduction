import process from 'process';
window.process = process;
import express from 'express'
import { renderToString } from 'react-dom/server';
import App from '../src/App.tsx';
const app = express()
const port = 9001

app.get('/', (req, res) => {
  res.send(
    renderToString(<App />)
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})