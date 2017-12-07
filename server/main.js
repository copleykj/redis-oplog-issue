import { TestCollection } from '../imports/testCollection';

if (TestCollection.configureRedisOplog) {
    TestCollection.configureRedisOplog({
        mutation(options, {doc}) {
            if(doc.client){
                console.log('Doc From Client Side Mutation..');

            } else {
                console.log('Doc From Server Side Mutation..');
            }

            console.log('_id is : ', doc._id, '\n');

        }
    })
}

Meteor.methods({
    serverMutation() {
        TestCollection.insert({server:true});
    }
})
