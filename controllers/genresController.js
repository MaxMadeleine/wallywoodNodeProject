import express from 'express';
import { genresModel } from '../models/genresModel.js';

const router = express.Router();

router.get('/genres', async (req, res) => {
    try {
        const data = await genresModel.getAllRecords();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/genres/:id', async (req, res) => {
    try {
        const data = await genresModel.getRecordById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/genres', async (req, res) => {
    try {
        const data = await genresModel.createRecord(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/genres', async (req, res) => {
    try {
        const data = await genresModel.updateRecord(req.body);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/genres/:id', async (req, res) => {
    try {
        const data = await genresModel.deleteRecord(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export const genresController = router;
