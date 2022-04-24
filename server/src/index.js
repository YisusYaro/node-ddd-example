import express from 'express';
import cors from 'cors';
import { AppContainer } from './shared/infraestructure/dependency-injection/app-container.js';
import { healtCheck } from './app.controller.js';
import { resourcesController } from './resources/interface/resources.controller.js';

AppContainer.getInstance().setDependencyInjectionApp();

const app = express();
const router = express.Router();
const port = 3000;

app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  })
);

healtCheck(router);
resourcesController(router);

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})