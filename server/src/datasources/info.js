import { DataSource } from "apollo-datasource"
import mongoose from "mongoose"

const Info = mongoose.model("Info");

export default class InfoAPI extends DataSource {
    constructor() {
        super();
    }
    initialize(config) {
        this.context = config.context;
    }
    async findInfos() {
        return Info.find({}).exec();
    }
    async findInfoByID({id}) {
        return Info.findOne({
            _id: id
        }).exec();
    }
    async addInfo(info) {
        const newInfo = new Info(info);
        return await newInfo.save();
    }
    async deleteInfo({id}) {
        return await Info.findOneAndRemove({
            _id: id
        });
    }
    async updateInfo({id,info}) {
        return await Info.findOneAndUpdate(
            {
              _id: id
            },
            info
        );
    }
}