import express from 'express';
import mongoose from 'mongoose';

//Conexao ao banco mongodb
mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    //Subindo servidor
    const port = 3001;
    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });

  })
  .catch(() => console.log('Erro ao conectar ao mongodb'));

