/* istanbul ignore file */
import cors from 'cors';
import express from 'express';
import path, { join } from 'path';

const __dirname = path.resolve();
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));

app.use('*', (req, res) => res.sendFile(join(__dirname, 'dist', 'index.html')));

app.listen(port, () => {});
