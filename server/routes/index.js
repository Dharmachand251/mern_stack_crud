import express from 'express';
import { createUser, getUsers, getUserById, deleteUser, updateUser } from '../controller/userController.js';

const routes = express.Router();

routes.get('/test', (req, res) => {
  res.json({ message: 'API is working!' });
});
routes.post('/users', createUser);
routes.get('/users', getUsers);
routes.get('/users/:id', getUserById);
routes.put('/update/users/:id', updateUser);
routes.delete('/delete/users/:id', deleteUser);

export default routes;
