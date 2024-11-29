import express from 'express';
import { cartlinesModel } from '../models/cartlinesModel.js';

const router = express.Router();

router.get('/cartlines', async (req, res) => {
    try {
        const data = await cartlinesModel.getAllRecords();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/cartlines/:id', async (req, res) => { 
    try {
        const data = await cartlinesModel.getRecordById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/cartlines', async (req, res) => {
    try {
        const data = await cartlinesModel.createRecord(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/cartlines', async (req, res) => {
    try {
          const data = await cartlinesModel.updateRecord(req.body);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/cartlines/:id', async (req, res) => {
    try {
        const data = await cartlinesModel.deleteRecord(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export const cartlinesController = router; 