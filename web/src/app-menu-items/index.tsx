import dashboardItems from 'app-menu-items/dashboard';
import dataEntryForms from 'app-menu-items/data-entry-forms';
import adminItems from 'app-menu-items/admin';
import systemTables from 'app-menu-items/system-tables';
import baseTables from 'app-menu-items/base-tables';

const menuItems = {
  items: [dashboardItems, dataEntryForms, adminItems, baseTables, systemTables],
};

export default menuItems;
