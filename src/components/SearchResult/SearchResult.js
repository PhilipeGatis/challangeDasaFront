import React from 'react';
import { List, Avatar } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import useFindUserRepositories from '../../hooks/useFindUserRepositories';
import IconText from '../IconText';
import styled from 'styled-components';

const StyledList = styled(List)`
  overflow: scroll;
  height: 100%;
`;

const SearchResult = ({ match }) => {
  const { user } = match.params;
  const [{ data, loading }] = useFindUserRepositories(user);
  return (
    <StyledList
      loading={loading}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(repo) => (
        <List.Item extra={<IconText icon={StarOutlined} text={repo.stargazers_count} />}>
          <List.Item.Meta
            avatar={<Avatar size={60}>{repo.language}</Avatar>}
            title={
              <a target="_blank" rel="noopener noreferrer" href={repo.html_url}>
                {repo.name}
              </a>
            }
            description={repo.description || repo.language}
          />
        </List.Item>
      )}
    />
  );
};

export default SearchResult;
