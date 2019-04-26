// set up any dataSources our resolvers need
import InfoAPI from './info'
import TaskAPI from './task'
export const dataSources = () => ({
    InfoAPI: new InfoAPI(),
    TaskAPI: new TaskAPI()
});