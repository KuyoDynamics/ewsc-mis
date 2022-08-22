/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Fab, Tooltip, TableFooterProps } from '@mui/material';
import { GridFooter, GridFooterContainer } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';

type CustomFooterProps = {
  onClick: () => void;
  title: string;
} & TableFooterProps;

function CustomFooterWithFab({ title, onClick, ...props }: CustomFooterProps) {
  return (
    <GridFooterContainer>
      <GridFooter {...props} />
      <Tooltip title={title}>
        <Fab
          size="small"
          color="primary"
          aria-label={title.toLowerCase()}
          sx={{ mr: '20px', ml: '20px' }}
          onClick={onClick}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </GridFooterContainer>
  );
}

export default CustomFooterWithFab;
