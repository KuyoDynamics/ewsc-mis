/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';

interface IDraggablePaperProps {
  [key: string]: any;
  handle: string;
}

function DraggablePaper({ handle, ...props }: IDraggablePaperProps) {
  return (
    <Draggable handle={handle} cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default DraggablePaper;
