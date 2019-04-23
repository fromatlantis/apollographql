// 引入mongoose模块
import mongoose from "mongoose";
import config from "../config";

// schema
import { InfoSchema } from './schema'

mongoose.model("Info", InfoSchema);
// 链接mongodb
export const createStore = () => {
  mongoose.set("debug", true);

  mongoose.connect(config.dbPath, {useNewUrlParser: true});

  mongoose.connection.on("disconnected", () => {
    mongoose.connect(config.dbPath);
  });
  mongoose.connection.on("error", err => {
    console.error(err);
  });

  mongoose.connection.on("open", async () => {
    console.log("Connected to MongoDB ", config.dbPath);
  });
};
