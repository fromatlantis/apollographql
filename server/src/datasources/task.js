import { DataSource } from "apollo-datasource"
import mongoose from "mongoose"

const Task = mongoose.model("Task");

export default class TaskAPI extends DataSource {
    constructor() {
        super();
    }
    initialize(config) {
        this.context = config.context;
    }
    async findTasks() {
        return Task.find({}).exec();
    }
    async findTaskByID({id}) {
        return Task.findOne({
            _id: id
        }).exec();
    }
    async addTask(task) {
        const newTask = new Task(task);
        return await newTask.save();
    }
    async deleteTask({id}) {
        return await Task.findOneAndRemove({
            _id: id
        });
    }
    async updateTask({id,Task}) {
        return await Task.findOneAndUpdate(
            {
              _id: id
            },
            Task
        );
    }
}