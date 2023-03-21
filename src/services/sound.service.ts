import { omit } from 'lodash';
import { FilterQuery, QueryOptions } from 'mongoose';
import soundModel, { Sound } from '../models/sound.model';
import { excludedFields } from '../controllers/auth.controller';

// CreateSound service
export const createSound = async (input: Partial<Sound>) => {
    const sound = await soundModel.create(input);
    return omit(sound.toJSON(), excludedFields);
};

// Find Sound by Id
export const findSoundById = async (id: string) => {
    const sound = await soundModel.findById(id).lean();
    return omit(sound, excludedFields);
};

// Find All sounds
export const findAllSounds = async () => {
    return await soundModel.find();
};