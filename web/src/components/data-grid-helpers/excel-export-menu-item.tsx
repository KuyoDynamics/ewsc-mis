import React from 'react';
import { GridExportMenuItemProps, useGridApiContext } from '@mui/x-data-grid';
import { getJson, saveExcelFile } from 'utils';
import { MenuItem } from '@mui/material';

type ExcelExportMenuItemProps = {
  fileName: string;
  worksheetName: string;
  ext: string;
} & GridExportMenuItemProps<{}>;

function ExcelExportMenuItem({
  hideMenu,
  fileName,
  worksheetName,
  ext,
}: ExcelExportMenuItemProps) {
  const apiRef = useGridApiContext();

  return (
    <MenuItem
      onClick={() => {
        const { json } = getJson(apiRef);

        saveExcelFile(fileName, worksheetName, ext, json);

        hideMenu?.();
      }}
    >
      Download as Excel(xlsx)
    </MenuItem>
  );
}

export default ExcelExportMenuItem;
