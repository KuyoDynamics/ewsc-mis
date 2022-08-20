import React from 'react';
import { TableCell } from '@mui/material';
import { Link } from 'react-router-dom';
import { Country } from '../../../graphql/generated';

interface ICountryProps {
  country: Country;
}
function ProvinceItem({ country }: ICountryProps) {
  return (
    <>
      <TableCell align="left">
        <Link to={`/system/countries/${country.id}`}>{country.name}</Link>
      </TableCell>

      <TableCell align="left">
        <Link to={`/system/countries/${country.code}`}>{country.code}</Link>
      </TableCell>
    </>
  );
}

export default ProvinceItem;
