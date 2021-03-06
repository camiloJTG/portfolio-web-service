import { Schema, model } from 'mongoose';
import { ISocialMedia } from '../../interfaces/socialMedia';

const socialMediaSchema = new Schema(
   {
      fullName: { type: String, required: true, trim: true },
      priority: { type: Number, required: true },
      url: { type: String, required: true, trim: true, unique: true },
      accountId: {
         type: Schema.Types.ObjectId,
         ref: 'accounts',
         required: true,
      },
   },
   { collection: 'socialMedia', timestamps: true }
);

export default model<ISocialMedia>('socialMedia', socialMediaSchema);
