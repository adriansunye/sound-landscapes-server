import { NextFunction, Request, Response } from 'express';
import { findAllSounds, createSound, findSoundById } from '../services/sound.service';
import { CreateSoundInput } from '../schema/sound.schema';

export const getAllSoundsHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const sounds = await findAllSounds();
        res.status(200).json({
            status: 'success',
            result: sounds.length,
            data: {
                sounds,
            },
        });
    } catch (err: any) {
        next(err);
    }
};

export const createSoundHandler = async (
    req: Request<{}, {}, CreateSoundInput>,
    res: Response,
    next: NextFunction
) => {
    try {
        const sound = await createSound({
            name: req.body.name,
            sound: req.body.sound,
            description: req.body.description,
        });

        res.status(201).json({
            status: 'success',
            data: {
                sound,
            },
        });
    } catch (err: any) {
        if (err.code === 11000) {
            return res.status(409).json({
                status: 'fail',
                message: 'Sound already exist',
            });
        }
        next(err);
    }
};

