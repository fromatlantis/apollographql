export const resolvers = {
    Query: {
      tasks: async (_, __, { dataSources }) =>
          dataSources.TaskAPI.findTasks(),
      task:  async (_, { id }, { dataSources }) =>
          dataSources.TaskAPI.findTaskByID({id})
    },
    Mutation: {
      addTask: async (_, { task } , { dataSources }) => {
          let result = dataSources.TaskAPI.addTask(task)
          if (!result){
              return {
                  success: false,
                  message: '添加失败',
              };
          }else{
              return {
                  success: true,
                  message: '添加成功'
              };
          }
      },
      deleteTask: async (_, { id } , { dataSources }) => {
          let result = dataSources.TaskAPI.deleteTask({id})
          if (!result){
              return {
                  success: false,
                  message: '删除失败',
              };
          }else{
              return {
                  success: true,
                  message: '删除成功'
              };
          }
      },
      updateTask: async (_, { id, task } , { dataSources }) => {
          let result = dataSources.TaskAPI.updateTask({id,task})
          if (!result){
              return {
                  success: false,
                  message: '修改失败',
              };
          }else{
              return {
                  success: true,
                  message: '修改成功'
              };
          }
      },
    },
  //   Info: {}
  };
  