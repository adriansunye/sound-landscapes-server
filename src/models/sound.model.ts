import {
    getModelForClass,
    modelOptions,
    prop,
    Ref
} from '@typegoose/typegoose';
import { User } from './user.model';

@modelOptions({
    schemaOptions: {
        // Add createdAt and updatedAt fields
        timestamps: true,
    },
})

// Export the Sound class to be used as TypeScript type
export class Sound {
    @prop({ required: true })
    name: string;

    @prop({ required: true })
    sound: string;

    @prop({ required: true })
    description: string;

    @prop({ ref: User })
    author: Ref<User>;
}

// Create the sound model from the Sound class
const soundModel = getModelForClass(Sound);
export default soundModel;
