import dashboardItems from 'app-menu-items/dashboard';
import dataEntryForms from 'app-menu-items/data-entry-forms';
import adminItems from 'app-menu-items/admin';
import systemTables from 'app-menu-items/system-tables';
import baseTables from 'app-menu-items/base-tables';
import myAccountItems from 'app-menu-items/my-account';

const menuItems = {
  items: [
    dashboardItems,
    dataEntryForms,
    myAccountItems,
    adminItems,
    baseTables,
    systemTables,
  ],
};

export default menuItems;
