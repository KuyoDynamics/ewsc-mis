/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

import { Disaggregate } from '../../../../graphql/generated';

interface IDisaggregateDetailProps {
  open: boolean;
  onClose: () => void;
  disaggregate: Disaggregate;
}

function DisaggregateDetail({
  open,
  onClose,
  disaggregate,
}: IDisaggregateDetailProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-label="disaggregate details dialog"
    >
      <DialogTitle id="user-inivation-dialog-title">
        <Typography color="textPrimary" variant="h4">
          {disaggregate?.name}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <List>
          {disaggregate?.disaggregate_options &&
            disaggregate?.disaggregate_options.map((item) => (
              <ListItem key={item.id} sx={{ display: 'disc' }}>
                <ListItemText primary={item.option.option_name} />
              </ListItem>
            ))}
        </List>
      </DialogContent>
    </Dialog>
  );
}

export default DisaggregateDetail;
