// @flow weak

import React                from 'react';
import {
  shallow
}                           from 'enzyme';
import chai, {expect}       from 'chai';
import dirtyChai            from 'dirty-chai';
import Home                 from '../../../src/app/views/home/Home';

chai.use(dirtyChai);

describe('Home VIEW ', () => {
  it('should render "Home" view', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).to.exist();
    expect(wrapper.find('Jumbotron').length).to.equal(1);
  });
});
