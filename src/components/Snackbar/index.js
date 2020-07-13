import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Alert } from 'antd';
import { parse } from 'qs';
import styled from 'styled-components';

const StyledAlert = styled(Alert)`
  position: absolute;
  bottom: 5px;
  width: 100%;
`;

const Snackbar = () => {
  const [showAlert, toggleAlert] = useState(false);
  const location = useLocation();
  const { search } = location;
  const { error } = parse(search, { ignoreQueryPrefix: true });

  useEffect(() => {
    if (error) {
      toggleAlert(true);
    }
  }, [error]);

  useEffect(() => {
    if (!showAlert) return;
    const timer = setTimeout(() => {
      toggleAlert(false);
      clearTimeout(timer);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showAlert]);
  return showAlert ? <StyledAlert type="error" message={error} banner /> : null;
};

export default Snackbar;
