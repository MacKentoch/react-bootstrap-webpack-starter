import React from 'react';
import {shallow} from 'enzyme'
import withEnterAnimation from '../withEnterAnimation';


describe('withEnterAnimation HOC', () => {
  it('renders as expected', () => {
    const DummyComponent = () => <p>component</p>;
    // @ts-ignore
    const component = shallow(withEnterAnimation()(DummyComponent));
    expect(component).toMatchSnapshot();
  });
});
