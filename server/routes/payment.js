import express from 'express';
import { getPayments, createPayment } from '../controller/paymentCtrl.js'
import { auth, checkAdmin } from '../middleware/auth.js'
const router = express.Router()

router.route('/')
    .get(auth, checkAdmin, getPayments)
    .post(auth, createPayment)
export default router;