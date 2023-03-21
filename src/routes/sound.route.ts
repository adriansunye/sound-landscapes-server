import express from 'express';
import {
    createSoundHandler,
    getAllSoundsHandler,
} from '../controllers/sound.controller';
import { createSoundSchema } from '../schema/sound.schema';
import { validate } from '../middleware/validate';
import { deserializeUser } from '../middleware/deserializeUser';
import { requireUser } from '../middleware/requireUser';

const router = express.Router();


// Get All Sounds route
router.get('/', getAllSoundsHandler);

// Create sound route
router.use(deserializeUser, requireUser).post('/create', validate(createSoundSchema), createSoundHandler);

export default router;
