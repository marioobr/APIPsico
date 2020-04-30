const express = require("express");
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//rutas
app.use(require('./routers/routes'));

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});
