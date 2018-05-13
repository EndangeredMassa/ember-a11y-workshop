import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | list-children', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:list-children');
    assert.ok(route);
  });
});
