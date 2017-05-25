// @flow weak

import React                from 'react';
import {expect}             from 'chai';
import {shallow}            from 'enzyme';
import App                  from '../../../src/app/containers/app/App';

let wrapper;
describe('App', () => {
  beforeEach(() => {
    wrapper = shallow(<App />).shallow();
  });

  it('should render <App />', () => {
    expect(wrapper.find('NavigationBar').length).to.equal(1);
  });
});
