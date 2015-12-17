import DS from "ember-data";
import Ember from "ember";

var CommentAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:3300',
  namespace: 'api',
  defaultSerializer: 'comment',
  headers: Ember.computed(function() {
    return {
      "Authorization": "Basic " + Ember.get(document.cookie.match(/authToken\=([^;]*)/), "1")
    };
  }).volatile()
});

CommentAdapter.reopen({
  headers: {
    "Authorization": "Basic " + Ember.$.cookie('authToken')
  }
});

export default CommentAdapter;
