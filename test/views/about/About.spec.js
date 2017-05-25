// @flow weak

import React                from 'react';
import {
  shallow
}                           from 'enzyme';
import chai, {expect}       from 'chai';
import dirtyChai            from 'dirty-chai';
import About                from '../../../src/app/views/about/About';

chai.use(dirtyChai);


describe('About VIEW ', () => {
  it('should render "About" view', () => {
    const wrapper = shallow(<About />);

    expect(wrapper).to.exist();
    expect(wrapper.containsMatchingElement(<h1>About</h1>));
  });
});
