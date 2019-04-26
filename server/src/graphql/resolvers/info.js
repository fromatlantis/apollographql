export const resolvers = {
  Query: {
    infos: async (_, __, { dataSources }) =>
        dataSources.InfoAPI.findInfos(),
    info:  async (_, { id }, { dataSources }) =>
        dataSources.InfoAPI.findInfoByID({id})
  },
  Mutation: {
    addInfo: async (_, { info } , { dataSources }) => {
        let result = dataSources.InfoAPI.addInfo(info)
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
    deleteInfo: async (_, { id } , { dataSources }) => {
        let result = dataSources.InfoAPI.deleteInfo({id})
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
    updateInfo: async (_, { id, info } , { dataSources }) => {
        let result = dataSources.InfoAPI.updateInfo({id,info})
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
