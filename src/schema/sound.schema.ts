import { object, string, TypeOf } from 'zod';

export const createSoundSchema = object({
    body: object({
        name: string({ required_error: 'Name is required' }),
        sound: string({ required_error: 'Sound is required' }),
        description: string({ required_error: 'Description is required' })
    })
});

export type CreateSoundInput = TypeOf<typeof createSoundSchema>['body'];
