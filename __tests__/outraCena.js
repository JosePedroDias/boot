import configuration from 'services/configuration'; // shared

import { forEach } from 'lodash';



describe('yo', () => {

  it('man', () => {
    forEach([], function() {});
  });

  it('asd', () => {
    expect( typeof configuration ).toBe('function');
  });

});
