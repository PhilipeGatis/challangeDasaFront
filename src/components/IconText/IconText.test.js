import React from 'react';
import IconText from './IconText';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import { StarOutlined } from '@ant-design/icons';

describe('<IconText />', () => {
  it('should render', () => {
    const wrapper = render(<IconText icon={StarOutlined} text={100} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
