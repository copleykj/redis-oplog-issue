import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

import { TestCollection } from '../imports/testCollection';

Template.buttons.events({
  'click #client'(event, instance) {
    TestCollection.insert({client:true});
  },
  'click #server'(event, instance) {
    Meteor.call('serverMutation');
  },
});
