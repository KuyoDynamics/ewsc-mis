import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonBase } from '@mui/material';
import Logo from 'components/logo';

function LogoSection() {
  return (
    <ButtonBase disableRipple component={Link} to="/">
      <Logo />
    </ButtonBase>
  );
}

export default LogoSection;
