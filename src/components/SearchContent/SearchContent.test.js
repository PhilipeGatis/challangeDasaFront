import React from 'react';
import SearchContent from './SearchContent';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<SearchContent />', () => {
  it('should render', () => {
    const wrapper = render(<SearchContent/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
