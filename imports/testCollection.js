import { Mongo } from 'meteor/mongo';

export const TestCollection = new Mongo.Collection('test');

TestCollection.allow({
    insert() {
        return true;
    }
})
