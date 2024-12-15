"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  GuestLayoutAnchorLinkBox,
  GuestLayoutAppBar,
  GuestLayoutHeaderMenu,
  GuestLayoutNavBox,
  GuestLayoutNavItem,
  MenuIconButton,
} from "./GuestLayoutHeader.styled";
import GuestLayoutHeaderDrawer from "./GuestLayoutHeaderDrawer";
import { IconPrimaryColor, NavItems, NavMenuPracticeAreasItems } from "./utils";

const GuestLayoutHeader = () => {
  const [menuAnchorEl, setMenuAnchorEl] =
    (useState < null) | (HTMLElement > null);
  const openMenu = Boolean(menuAnchorEl);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleClickMenu = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box className="flex justify-center items-center">
        <GuestLayoutAppBar>
          <GuestLayoutNavBox component="nav">
            <Box component="a" Link href="/">
              <Typography>Drashti</Typography>
            </Box>
            <MenuIconButton
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={IconPrimaryColor}
            >
              <MenuIcon />
            </MenuIconButton>
            <GuestLayoutNavItem>
              <>
                <Button
                  id="demo-customized-button"
                  aria-controls={openMenu ? "header-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                  variant="contained"
                  disableElevation
                  onClick={handleClickMenu}
                  className="!normal-case"
                  endIcon={
                    openMenu ? (
                      <KeyboardArrowUpIcon sx={IconPrimaryColor} />
                    ) : (
                      <KeyboardArrowDownIcon sx={IconPrimaryColor} />
                    )
                  }
                  sx={{
                    backgroundColor: "transparent",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <Typography
                    variant="landingBody1"
                    className={openMenu ? "!font-bold" : ""}
                  >
                    Practice Areas
                  </Typography>
                </Button>
                <GuestLayoutHeaderMenu
                  id="header-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={menuAnchorEl}
                  open={openMenu}
                  onClose={handleCloseMenu}
                >
                  {NavMenuPracticeAreasItems.map((item) => (
                    <Box
                      component="a"
                      href={item.link}
                      key={item.title}
                      className="no-underline text-[#303030]"
                    >
                      <MenuItem onClick={handleCloseMenu} disableRipple>
                        {item.title}
                      </MenuItem>
                    </Box>
                  ))}
                </GuestLayoutHeaderMenu>
              </>

              <GuestLayoutAnchorLinkBox>
                {NavItems.map((item) => (
                  <Box
                    component="a"
                    href={item.link}
                    key={item.title}
                    className="cursor-pointer no-underline"
                  >
                    <Typography variant="landingBody1">{item.title}</Typography>
                  </Box>
                ))}
              </GuestLayoutAnchorLinkBox>
              <Box
                component="a"
                href="/signin"
                className="no-underline"
                passHref
              >
                <Button
                  variant="contained"
                  className="!rounded-lg !px-10 !py-4 !shadow-none"
                >
                  <Typography
                    variant="landingButtonBody1"
                    className="!text-white normal-case"
                  >
                    Sign In
                  </Typography>
                </Button>
              </Box>
            </GuestLayoutNavItem>
          </GuestLayoutNavBox>
        </GuestLayoutAppBar>
      </Box>
      <GuestLayoutHeaderDrawer
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
    </Box>
  );
};

export default GuestLayoutHeader;
