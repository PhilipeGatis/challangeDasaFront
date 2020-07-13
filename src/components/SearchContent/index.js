import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const { Search } = Input;

const CenterContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const SearchContent = ({ history }) => {
  const handleSearch = (value) => {
    history.push(`/${value}`);
  };

  const handleEnter = (evt) => {
    history.push(`/${evt.target.value}`);
  };

  return (
    <CenterContent>
      <Search
        placeholder="input search username"
        enterButton="Search"
        size="large"
        onPressEnter={handleEnter}
        onSearch={handleSearch}
      />
    </CenterContent>
  );
};

export default SearchContent;
