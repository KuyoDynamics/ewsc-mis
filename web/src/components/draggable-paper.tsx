/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';

function DraggablePaper(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default DraggablePaper;
