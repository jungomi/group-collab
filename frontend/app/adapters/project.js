import DS from "ember-data";
import Ember from "ember";

var ProjectAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:3300',
  namespace: 'api',
  defaultSerializer: 'project',
  headers: Ember.computed(function() {
    return {
      "Authorization": "Basic " + Ember.get(document.cookie.match(/authToken\=([^;]*)/), "1")
    };
  }).volatile()
});

ProjectAdapter.reopen({
  headers: {
    "Authorization": "Basic " + Ember.$.cookie('authToken')
  }
});

export default ProjectAdapter;
