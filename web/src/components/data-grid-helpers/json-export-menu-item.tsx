import React from 'react';
import { MenuItem } from '@mui/material';
import { GridExportMenuItemProps, useGridApiContext } from '@mui/x-data-grid';
import { exportBlob, getJson } from 'utils';

type IJsonExportMenuItemProps = {
  fileName: string;
} & GridExportMenuItemProps<{}>;

function JsonExportMenuItem({ fileName, hideMenu }: IJsonExportMenuItemProps) {
  const apiRef = useGridApiContext();
  return (
    <MenuItem
      onClick={() => {
        const { jsonString } = getJson(apiRef);
        const blob = new Blob([jsonString], {
          type: 'text/json',
        });
        exportBlob(blob, `${fileName}.json`);

        hideMenu?.();
      }}
    >
      Download as JSON
    </MenuItem>
  );
}

export default JsonExportMenuItem;
