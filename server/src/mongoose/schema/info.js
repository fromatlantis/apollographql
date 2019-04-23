// 引入mongoose
import mongoose from "mongoose";
//
const Schema = mongoose.Schema;
// 实例InfoSchema
export const InfoSchema = new Schema({
  hobby: [String],
  height: String,
  weight: Number,
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
InfoSchema.pre("save", function(next) {
  console.log(this.isNew)
  if (this.isNew) {
    this.meta.createdAt = this.meta.updatedAt = Date.now();
  } else {
    this.meta.updatedAt = Date.now();
  }
  next();
});
// 建立Info数据模型
// mongoose.model("Info", InfoSchema);
