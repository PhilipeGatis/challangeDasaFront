import React from 'react';
import UserHeader from './UserHeader';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter, Route } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import userJSON from '../../fixtures/user';

jest.mock('../../hooks/useUser');

describe('<UserHeader />', () => {
  const RenderWithRouter = ({ children }) => (
    <MemoryRouter initialEntries={['/PhilipeGatis']}>
      <Route path="/:user">{children}</Route>
    </MemoryRouter>
  );

  it('should render', () => {
    useUser.mockReturnValue([
      {
        data: userJSON,
        loading: false,
      },
    ]);
    const wrapper = render(
      <RenderWithRouter>
        <UserHeader />
      </RenderWithRouter>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
