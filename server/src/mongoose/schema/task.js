// 引入mongoose
import mongoose from "mongoose";
//
const Schema = mongoose.Schema;

export const TaskSchema = new Schema({
  name: String,
  status: String,
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
});
// 在保存数据之前跟新日期
// pre(save|update|find|validate)
TaskSchema.pre("save", function(next) {
  console.log(this.isNew)
  if (this.isNew) {
    this.meta.createdAt = this.meta.updatedAt = Date.now();
  } else {
    this.meta.updatedAt = Date.now();
  }
  next();
});
