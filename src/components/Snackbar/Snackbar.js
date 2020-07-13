import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Alert } from 'antd';
import { parse, stringify } from 'qs';
import styled from 'styled-components';

const StyledAlert = styled(Alert)`
  position: absolute;
  bottom: 5px;
  width: 100%;
`;

const Snackbar = () => {
  const [showAlert, toggleAlert] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const { search } = location;
  const { error, ...restQs } = parse(search, { ignoreQueryPrefix: true });

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
      history.replace({
        pathname: location.pathname,
        search: stringify(restQs),
      });
    }, 3000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showAlert]);

  return showAlert ? <StyledAlert type="error" message={error} banner /> : null;
};

export default Snackbar;
