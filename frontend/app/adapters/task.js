import DS from "ember-data";
import Ember from "ember";

var TaskAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:3300',
  namespace: 'api',
  defaultSerializer: 'task',
  headers: Ember.computed(function() {
    return {
      "Authorization": "Basic " + Ember.get(document.cookie.match(/authToken\=([^;]*)/), "1")
    };
  }).volatile()
});

TaskAdapter.reopen({
  headers: {
    "Authorization": "Basic " + Ember.$.cookie('authToken')
  }
});

export default TaskAdapter;
