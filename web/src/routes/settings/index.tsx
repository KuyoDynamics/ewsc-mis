import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard/dashboard-layout";
import { SettingsNotifications } from "../../components/settings/notifications";
import { SettingsPassword } from "../../components/settings/password";

const Settings = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography sx={{ mb: 3 }} variant="h4">
          Settings
        </Typography>
        <SettingsNotifications />
        <Box sx={{ pt: 3 }}>
          <SettingsPassword />
        </Box>
      </Container>
    </Box>
  </>
);

Settings.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

export default Settings;
