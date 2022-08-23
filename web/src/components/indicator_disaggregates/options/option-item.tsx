import React from 'react';
import { TableCell } from '@mui/material';
import { Link } from 'react-router-dom';
import { Option } from '../../../../graphql/generated';

interface IOptionProps {
  option: Option;
}
function OptionItem({ option }: IOptionProps) {
  return (
    <>
      <TableCell align="left">
        <Link to={`/system/options/${option.id}`}>{option.option_name}</Link>
      </TableCell>

      <TableCell align="left">
        <Link to={`/system/options/${option.id}`}>{option.option_name}</Link>
      </TableCell>
    </>
  );
}

export default OptionItem;
