import express from 'express';
import { userRoute } from './router/userRouter.js';
const app = express();
const puerto = 3000;


app.set('view engine', 'pug')
app.set('views', './views')
app.set(express.static('public'))
app.use(userRoute);

app.listen(puerto, ()=>{
  console.log(`Servidor corriendo en el puerto ${puerto}`);
});
