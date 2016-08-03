import React                from 'react';
import {
  shallow
}                           from 'enzyme';
import chai, {expect}       from 'chai';
import dirtyChai            from 'dirty-chai';
import Components           from '../../../src/app/views/components/Components';

chai.use(dirtyChai);


describe('Components VIEW ', () => {
  it('should render "Components" view', () => {
    const wrapper = shallow(<Components />);

    expect(wrapper).to.exist();
    expect(wrapper.containsMatchingElement(<h1>Components</h1>));
  });
});
