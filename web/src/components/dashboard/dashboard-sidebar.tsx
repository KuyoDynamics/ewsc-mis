import React, { useEffect } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  User as UserIcon,
  XCircle as XCircleIcon,
  UserAdd as UserAddIcon,
  Users as UsersIcon,
  ChartBar as ChartBarIcon,
  Cog as CogIcon,
  Lock as LockIcon,
  Selector as SelectorIcon,
  ShoppingBag as ShoppingBagIcon,
} from "../../icons";

import { Logo } from "../logo";
import { NavItem } from "../nav-item";
import { NavLink, useLocation } from "react-router-dom";
import { useGetCurrentUserQuery } from "../../../graphql/generated";

const items = [
  {
    href: "/",
    icon: <ChartBarIcon fontSize="small" />,
    title: "Dashboard",
  },
  {
    href: "/technical",
    icon: <UsersIcon fontSize="small" />,
    title: "Technical",
  },
  {
    href: "/commercial",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Commercial",
  },
];

const adminTasks = [
  {
    href: "/settings",
    icon: <CogIcon fontSize="small" />,
    title: "Settings",
  },
];

export const DashboardSidebar = (props: DashboardSidebarProps) => {
  const { open, onClose } = props;
  const { pathname } = useLocation();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });
  const { loading, data, error } = useGetCurrentUserQuery({
    fetchPolicy: "cache-first",
  });

  // const [] = useGetD

  useEffect(() => {
    if (!pathname) {
      return;
    }

    if (open) {
      onClose?.();
    }
  }, [pathname]);

  const renderContent = () => {
    if (loading) return <p>loading user scope...</p>;
    else if ((data && data.me.__typename === "ApiNotFoundError") || error)
      return <p>failed to load use scope</p>;
    else if (data && data.me.__typename === "User")
      return (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <div>
              <Box sx={{ p: 3 }}>
                <NavLink to="/">
                  <a>
                    <Logo
                      sx={{
                        height: 42,
                        width: 42,
                      }}
                    />
                  </a>
                </NavLink>
              </Box>
              <Box sx={{ px: 2 }}>
                <Box
                  sx={{
                    alignItems: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    px: 3,
                    py: "11px",
                    borderRadius: 1,
                  }}
                >
                  <div>
                    {/* <Typography color="inherit" variant="subtitle1"> */}
                    {/* Come back later and do the default user district */}
                    {/* {data.me.user_organisations.} */}
                    {/* </Typography> */}
                    <Typography color="inherit" variant="subtitle2">
                      Eastern
                    </Typography>
                    <Typography color="neutral.400" variant="body2">
                      Your district : Chipata
                    </Typography>
                  </div>
                  <SelectorIcon
                    sx={{
                      color: "neutral.500",
                      width: 14,
                      height: 14,
                    }}
                  />
                </Box>
              </Box>
            </div>
            <Divider
              sx={{
                borderColor: "#2D3748",
                my: 3,
              }}
            />
            <Box sx={{ flexGrow: 1 }}>
              {items.map((item) => (
                <NavItem
                  key={item.title}
                  icon={item.icon}
                  to={item.href}
                  title={item.title}
                />
              ))}
            </Box>
            <Divider
              sx={{
                borderColor: "#2D3748",
                my: 3,
              }}
            />
            <Box sx={{ flexGrow: 1 }}>
              {adminTasks.map((item) => (
                <NavItem
                  key={item.title}
                  icon={item.icon}
                  to={item.href}
                  title={item.title}
                />
              ))}
            </Box>
            <Divider sx={{ borderColor: "#2D3748" }} />
            <Box
              sx={{
                px: 2,
                py: 3,
              }}
            >
              <Typography color="neutral.100" variant="subtitle2">
                Need more features?
              </Typography>
              <Typography color="neutral.500" variant="body2">
                Check out our Pro solution template.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  mt: 2,
                  mx: "auto",
                  width: "160px",
                  "& img": {
                    width: "100%",
                  },
                }}
              >
                <img alt="Go to pro" src="/static/images/sidebar_pro.png" />
              </Box>
              <NavLink to="https://material-kit-pro-react.devias.io/">
                <Button
                  color="secondary"
                  component="a"
                  endIcon={<OpenInNewIcon />}
                  fullWidth
                  sx={{ mt: 2 }}
                  variant="contained"
                >
                  Pro Live Preview
                </Button>
              </NavLink>
            </Box>
          </Box>
        </>
      );
  };

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {renderContent()}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {renderContent()}
    </Drawer>
  );
};

type DashboardSidebarProps = {
  onClose: (event?: {}, reason?: "backdropClick" | "escapeKeyDown") => void;
  open: boolean;
};
