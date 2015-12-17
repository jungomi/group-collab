import DS from "ember-data";

var UserAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:3300',
  namespace: 'api',
  defaultSerializer: 'user'
});

export default UserAdapter;
