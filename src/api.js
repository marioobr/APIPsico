const express = require("express");
const app = express();

app.set('port',process.env.PORT || 3000);
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//rutas
app.use(require('./routers/routes'));

app.listen(app.get('port'), () => {
 console.log("El servidor está inicializado en el puerto "+app.get('port'));
 console.log("Está bien");
});
