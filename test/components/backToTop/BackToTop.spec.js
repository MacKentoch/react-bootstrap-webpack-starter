// @flow weak

import React                from 'react';
import {
  shallow
}                           from 'enzyme';
import chai, {expect}       from 'chai';
import dirtyChai            from 'dirty-chai';
import BackToTop            from '../../../src/app/components/backToTop/BackToTop';

chai.use(dirtyChai);

const minScrollYMock = 10;
const scrollToMock= 'fakeId';


describe('<BackToTop />', () => {
  const props = {
    minScrollY: minScrollYMock,
    scrollTo: scrollToMock
  };

  it('should render a BackToTop', () => {
    const wrapper = shallow(<BackToTop {...props}/>);

    expect(wrapper.node).to.exist();
  });
});
