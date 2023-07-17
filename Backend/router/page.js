import express from 'express';

import { loginPage, registerPage, successPage } from '../controllers/pageController.js';

const route = express.Router();

route.get('/register', registerPage);
route.get('/login', loginPage);
route.get('/user/success', successPage);
// route.get('/error/page', errorPage);



export default route;