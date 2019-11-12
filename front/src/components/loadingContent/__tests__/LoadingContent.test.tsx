import React from 'react';
import { shallow } from 'enzyme';
import LoadingContent from '../LoadingContent';

describe('LoadingContent component', () => {
  it('renders as expected', () => {
    const component = shallow(<LoadingContent />);
    expect(component).toMatchSnapshot();
  });
});
