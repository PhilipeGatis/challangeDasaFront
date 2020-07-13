import React from 'react';
import Snackbar from './Snackbar';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter, Route } from 'react-router-dom';

describe('<Snackbar />', () => {
  const RenderWithRouter = ({ children }) => (
    <MemoryRouter initialEntries={['/?error=errorMessage']}>
      <Route path="/">{children}</Route>
    </MemoryRouter>
  );

  it('should render', async () => {
    const wrapper = render(
      <RenderWithRouter>
        <Snackbar />
      </RenderWithRouter>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
