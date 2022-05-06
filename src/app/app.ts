import cors from 'cors';
import helmet from 'helmet';
import index from './router';
import express from 'express';
const App = express();

//Middlewares
App.use(helmet());
App.use(cors());

//Router
App.use('/', index);

export default App;