import express from 'express';
import { fomrularioLogin, fomrularioRegistro, fomrularioRecuperar } from '../controller/userController.js';
const userRoute = express.Router();

userRoute.get('/login', fomrularioLogin );
userRoute.get('/registro', fomrularioRegistro );
userRoute.get('/recuperar', fomrularioRecuperar );

export {
  userRoute
}