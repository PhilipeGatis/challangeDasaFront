import React from 'react';
import SearchResult from './SearchResult';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import reposJSON from '../../fixtures/repos';

import useFindUserRepositories from '../../hooks/useFindUserRepositories';
jest.mock('../../hooks/useFindUserRepositories');

const match = {
  params: {
    user: 'PhilipeGatis',
  },
};

describe('<SearchResult />', () => {
  it('should render', () => {
    useFindUserRepositories.mockReturnValue([
      {
        data: reposJSON,
        loading: false,
      },
    ]);
    const wrapper = render(<SearchResult match={match} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should loading true', () => {
    useFindUserRepositories.mockReturnValue([
      {
        data: [],
        loading: true,
      },
    ]);
    const wrapper = render(<SearchResult match={match} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
