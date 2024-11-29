import express from 'express';
import { postersModel } from '../models/postersModel.js';

const router = express.Router();

router.get('/posters', async (req, res) => {
    try {
        const data = await postersModel.getAllRecords();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/posters/:id', async (req, res) => {
    try {
        const data = await postersModel.getRecordById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/posters', async (req, res) => {
    try {
        const data = await postersModel.createRecord(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/posters', async (req, res) => {
    try {
        const data = await postersModel.updateRecord(req.body);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/posters', async (req, res) => {
    try {
        const data = await postersModel.deleteRecord(req.body);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export const postersController = router;
