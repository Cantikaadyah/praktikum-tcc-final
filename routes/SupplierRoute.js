import express from "express";
import {
    getSuppliers, 
    getSupplierById,
    createSupplier,
    updateSupplier,
    deleteSupplier
} from "../controllers/SupplierController.js";

const router = express.Router();

router.get('/suppliers', getSuppliers);
router.get('/suppliers/:id', getSupplierById);
router.post('/suppliers', createSupplier);
router.patch('/suppliers/:id', updateSupplier);
router.delete('/suppliers/:id', deleteSupplier);

// router.get('/', (req, res) => {
//     console.log('Hello world received a request.');
  
//     const target = process.env.TARGET || 'World';
//     res.send(`Hello ${target}!`);
//   });

export default router;