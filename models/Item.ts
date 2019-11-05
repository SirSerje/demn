import { Document, Schema, Model, model} from "mongoose";
import * as mongoose from "mongoose";

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// module.exports = Item = mongoose.model('item', ItemSchema);

export interface IUserModel extends Document {

}
// module.exports = Item = mongoose.model('item', ItemSchema);
export const Item: Model<IUserModel> = model<IUserModel>("item", ItemSchema);
