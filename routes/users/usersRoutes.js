import express from 'express'
import createUser from '../../controllers/users/createUser.js';
import { getUsers, getEntrenadores } from '../../controllers/users/getUser.js';


const router = express.Router();


/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.send('Ruta de usuarios');
});

router.post("/create-user",createUser);
router.get("/get-users", getUsers);
router.get("/get-entrenadores", getEntrenadores)




export default router

