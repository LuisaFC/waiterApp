import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

//Conexao ao banco mongodb
mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    //Subindo servidor
    const port = 3001;

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

    //Parse
    app.use(express.json());

    //Define Router
    app.use(router);
    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });

  })
  .catch(() => console.log('Erro ao conectar ao mongodb'));

