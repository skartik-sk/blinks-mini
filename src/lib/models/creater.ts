import mongoose, { Schema, Document } from 'mongoose';

interface ICreator extends Document {
    solAdd: string;
    title: string;
    description: string;
    label: string;
    amount: number;
    icon: string;
    createdAt: Date;
    updatedAt: Date;
}

const CreatorSchema: Schema = new Schema({
   solAdd: { type: String, required: true },
   title: { type: String, required: true },
    description: { type: String, required: true },
    label: { type: String, required: true },
    amount : { type: Number, required: true },
    icon: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

CreatorSchema.pre<ICreator>('save', function(next) {
    this.updatedAt = new Date();
    next();
});

const Creator = mongoose.models.Creator || mongoose.model<ICreator>('Creator', CreatorSchema);

export default Creator