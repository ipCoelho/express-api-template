import { Schema, model } from 'mongoose';

interface Animal extends Document {
    name: string;
    breed: string;
    sex: string;
    age?: number;
}

const AnimalSchema = new Schema({
    name: String,
    breed: String,
    sex: String,
    age: Number
}, { timestamps: true });

export default model<Animal>('Animals', AnimalSchema);