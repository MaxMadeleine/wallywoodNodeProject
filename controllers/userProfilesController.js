import express from 'express';
import { userProfilesModel } from '../models/userProfilesModel.js';

const router = express.Router();

router.get('/user-profiles', async (req, res) => {
    try {
        const data = await userProfilesModel.getAllRecords();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/user-profiles/:id', async (req, res) => {
    try {
        const data = await userProfilesModel.getRecordById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/user-profiles', async (req, res) => {
    try {
        const data = await userProfilesModel.createRecord(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/user-profiles/:id', async (req, res) => {
    try {
        const data = await userProfilesModel.updateRecord({
            id: req.params.id,
            ...req.body
        });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/user-profiles/:id', async (req, res) => {
    try {
        const data = await userProfilesModel.deleteRecord(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export const userProfilesController = router; 