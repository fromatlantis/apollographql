import { mergeSchemas } from 'graphql-tools'
import { infoSchema } from './info'
import { taskSchema } from './task'
export const schema = mergeSchemas({
    schemas: [
        infoSchema,
        taskSchema
    ],
});