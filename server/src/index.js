import express from 'express';
import { healtCheck } from './app.controller.js';
import { resourcesController } from './resources/interface/resources.controller.js';

const app = express();
const router = express.Router();
const port = 3000;

app.use(express.json());

healtCheck(router);
resourcesController(router);

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})