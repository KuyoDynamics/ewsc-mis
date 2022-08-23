import React from 'react';
import { TableCell } from '@mui/material';
import { Link } from 'react-router-dom';
import { Disaggregate } from '../../../../graphql/generated';

interface IDisaggregateProps {
  disaggregate: Disaggregate;
}
function DisaggregateItem({ disaggregate }: IDisaggregateProps) {
  return (
    <>
      <TableCell align="left">
        <Link to={`/system/disaggregates/${disaggregate.id}`}>
          {disaggregate.name}
        </Link>
      </TableCell>

      <TableCell align="left">
        <Link to={`/system/disaggregates/${disaggregate.id}`}>
          {disaggregate.name}
        </Link>
      </TableCell>
    </>
  );
}

export default DisaggregateItem;
