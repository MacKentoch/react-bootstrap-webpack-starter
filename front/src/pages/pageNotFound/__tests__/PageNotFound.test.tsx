import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import PageNotFound from '../PageNotFound';

describe('PageNotFound page', () => {
  it('renders as expected', () => {
    const component = shallow(
      <div>
        <MemoryRouter>
          <PageNotFound />
        </MemoryRouter>
      </div>,
    );
    expect(component).toMatchSnapshot();
  });
});
