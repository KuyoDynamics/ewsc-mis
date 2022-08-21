import React from 'react';
import { TableCell } from '@mui/material';
import { Link } from 'react-router-dom';
import { Residence } from '../../../graphql/generated';

interface IResidenceProps {
  residence: Residence;
}
function ResidenceItem({ residence }: IResidenceProps) {
  return (
    <>
      <TableCell align="left">
        <Link to={`/system/residences/${residence.id}`}>{residence.name}</Link>
      </TableCell>

      <TableCell align="left">
        <Link to={`/system/residences/${residence.id}`}>{residence.name}</Link>
      </TableCell>
    </>
  );
}

export default ResidenceItem;
