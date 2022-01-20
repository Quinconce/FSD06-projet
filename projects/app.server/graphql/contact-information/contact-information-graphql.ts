

import { ContactInformationDocument, ContactInformationModel } from '../../../lib.node.decocloud/models';
import { composeWithMongoose, createResolvers } from 'graphql-compose-mongoose';
import { attachToken, attachUser } from '../middlewares';
import { allWithMiddlewares, Context } from '../common';





const tc = composeWithMongoose<ContactInformationDocument, Context>(ContactInformationModel, {
    name: 'ContactInformation',
    resolvers: false,
    fields: { remove: [] }
});
//=> Create resolvers now (delayed to let place to prior input type modification)
createResolvers(ContactInformationModel, tc, {});
export { tc as contactInformationTypeComposer };
// [Queries]
// ---------
export const queries = {
    findById: tc.getResolver('findById'),
    findByIds: tc.getResolver('findByIds'),
    ...allWithMiddlewares([attachToken(), attachUser()], {
        findOne: tc.getResolver('findOne'),
        findMany: tc.getResolver('findMany'),
        connection: tc.getResolver('connection'),
        pagination: tc.getResolver('pagination')
    })
};
// [Mutations]
// -----------
export const mutations = {
    ...allWithMiddlewares([attachToken(), attachUser()], {
        createOne: tc.getResolver('createOne'),
        updateById: tc.getResolver('updateById'),
        updateOne: tc.getResolver('updateOne'),
        removeById: tc.getResolver('removeById'),
        removeOne: tc.getResolver('removeOne')
    })
};


