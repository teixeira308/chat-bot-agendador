const express = require('express');
const app = express();
const cors = require('cors');
const userRoute = require('./routes/userRoutes');


// Middleware para analisar o corpo das solicitações e habilitar CORS
app.use(express.json());
app.use(cors());

// Middleware de roteamento para os candidatos e outras rotas

app.use('/bot/v1/users', userRoute);


app.use(express.urlencoded({
    extended: true
  }))

// Define os cabeçalhos CORS manualmente não é mais necessário
    
// Inicia o servidor
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
