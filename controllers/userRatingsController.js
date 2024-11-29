import express from 'express';
import { userRatingsModel } from '../models/userRatingsModel.js';

const router = express.Router();

router.get('/user-ratings', async (req, res) => {
    try {
        const data = await userRatingsModel.getAllRecords();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/user-ratings/:id', async (req, res) => {
    try {
        const data = await userRatingsModel.getRecordById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/user-ratings', async (req, res) => {
    try {
        const data = await userRatingsModel.createRecord(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/user-ratings/:id', async (req, res) => {
    try {
        const data = await userRatingsModel.updateRecord({
            id: req.params.id,
            ...req.body
        });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/user-ratings/:id', async (req, res) => {
    try {
        const data = await userRatingsModel.deleteRecord(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export const userRatingsController = router; 