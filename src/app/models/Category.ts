import { model, Schema } from 'mongoose';

//Create Category Model
export const Category = model('Category', new Schema({
  name: {
    type: String,
    required: true,
  },
  icon:  {
    type: String,
    required: true,
  },
}));
