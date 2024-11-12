import express from 'express';
import { 
  updateDoctor,
  deleteDoctor,
  getAllDoctor,
  getSingleDoctor,
  } from '../Controllers/doctorController.js';

const router = express.Router();
//nested routes
import { authenticate , restrict } from '../auth/verifyToken.js';
import reviewRouter from './review.js';

//nested routes
router.use('/:doctorId/reviews', reviewRouter);

router.get('/:id', getSingleDoctor);
router.get('/', getAllDoctor);
router.put('/:id', authenticate, restrict(["doctor"]),updateDoctor);
router.delete('/:id',authenticate,restrict(["doctor"]), deleteDoctor);


export default router;