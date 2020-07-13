import React from 'react';
import { Avatar } from 'antd';
import { Typography, Space, Button, Tooltip } from 'antd';
import useUser from '../hooks/useUser';
import styled from 'styled-components';
import ArrowLeftOutlined from '@ant-design/icons/ArrowLeftOutlined';

const { Text } = Typography;

const StyleText = styled(Text)`
  color: #fff;
`;

const StyleButton = styled(Button)`
  color: #fff;
`;

const UserHeader = ({ history, match }) => {
  const { user } = match.params;
  const [{ data, loading, error }] = useUser(user);

  if (error) {
    const errorMessage = `error=User not found: ${user}`;
    history.push({
      pathname: '/',
      search: errorMessage,
    });
    return null;
  }

  if (loading) return null;
  return (
    <Space direction="horizontal">
      <Tooltip title="Back">
        <StyleButton type="link" href="/" shape="circle" icon={<ArrowLeftOutlined />} />
      </Tooltip>
      <Avatar size={40} src={data.avatar_url} />
      <StyleText>{data.name}</StyleText>
    </Space>
  );
};

export default UserHeader;
