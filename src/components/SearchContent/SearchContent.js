import React from 'react';
import { Input, Row, Col } from 'antd';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from './animation.json';

const { Search } = Input;

const StyledRow = styled(Row)`
  height: 100%;
`;

const StyledColInput = styled(Col)`
  height: 50%;
  display: flex;
  justify-content: center;
`;

const StyledSearch = styled(Search)`
  width: 50%;
  min-width: 350px;
`;

const StyledColLottie = styled(Col)`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchContent = ({ history }) => {
  const handleSearch = (value) => {
    history.push(`/${value}`);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <StyledRow justify="center" align="middle">
      <StyledColLottie span={24}>
        <Lottie options={defaultOptions} height={200} width={200} />
      </StyledColLottie>
      <StyledColInput span={24}>
        <StyledSearch
          id="searchInput"
          placeholder="input username for search"
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
        />
      </StyledColInput>
    </StyledRow>
  );
};

export default SearchContent;
