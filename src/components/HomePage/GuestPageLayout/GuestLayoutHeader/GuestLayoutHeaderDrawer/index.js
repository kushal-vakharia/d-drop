"use client";

import {
  Box,
  Button,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  NavItems,
  IconPrimaryColor,
  NavMenuPracticeAreasItems,
} from "../utils";
import { GuestLayoutNavDrawer } from "./GuestLayoutHeaderDrawer.styled";
// import { scrollToSection } from "@/utils/genericUtils";

const GuestLayoutHeaderDrawer = (props) => {
  const { window: windowProp } = props;
  const container =
    windowProp !== undefined ? () => windowProp().document.body : undefined;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  // const handleScrollToSection = (id) => {
  //   if (window && typeof window !== "undefined") {
  //     if (window.location.pathname === "/") {
  //       setTimeout(() => {
  //         scrollToSection(id);
  //       }, 500);
  //       return;
  //     }
  //   }
  //   localStorage.setItem("scrollToSection", id);
  // };

  return (
    <Box component="nav">
      <GuestLayoutNavDrawer
        container={container}
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box className="!py-4">
          <Box className="flex justify-between items-center !px-8">
            <Box component="a" href="/">
              <Box
                component="img"
                src="/images/vizafi_logo.png"
                alt="logo"
                width={144}
                height={54.13}
              />
            </Box>
            <IconButton onClick={props.handleDrawerToggle}>
              <CloseIcon sx={IconPrimaryColor} />
            </IconButton>
          </Box>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className="!px-5"
          >
            <ListItemButton onClick={handleClick} className="!px-3 !py-2">
              <ListItemText
                primary={
                  <Typography
                    variant="landingBody1"
                    className={open ? "!font-bold" : ""}
                  >
                    Practice Areas
                  </Typography>
                }
                className="max-w-fit !mr-2 !my-0"
              />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {NavMenuPracticeAreasItems.map((item) => (
                  <Box
                    component="a"
                    href={item.link}
                    className="no-underline"
                    key={item.title}
                  >
                    <ListItemButton
                      className="!py-1 !pl-8"
                      key={item.title}
                      onClick={props.handleDrawerToggle}
                    >
                      <ListItemText
                        primary={
                          <Typography
                            variant="landingBody1"
                            className="opacity-70"
                          >
                            {item.title}
                          </Typography>
                        }
                        className="!my-0"
                      />
                    </ListItemButton>
                  </Box>
                ))}
              </List>
            </Collapse>
            {NavItems.map((item) => (
              <Box
                component="a"
                href={item.link}
                className="no-underline"
                key={item.title}
                // {...(item.isScrollToSectionId && {
                //   onClick: () =>
                //     handleScrollToSection(item.isScrollToSectionId),
                // })}
              >
                <ListItem disablePadding>
                  <ListItemButton
                    className="!px-3 !py-2"
                    onClick={props.handleDrawerToggle}
                  >
                    <ListItemText
                      primary={
                        <Typography variant="landingBody1">
                          {item.title}
                        </Typography>
                      }
                      className="!my-0"
                    />
                  </ListItemButton>
                </ListItem>
              </Box>
            ))}
            <Box component="a" href="/signin" className="no-underline" passHref>
              <Button
                variant="contained"
                className="!rounded-lg !px-10 !py-4 !shadow-none !mt-2 !ml-3"
              >
                <Typography
                  variant="landingButtonBody1"
                  className="!text-white normal-case"
                >
                  Sign In
                </Typography>
              </Button>
            </Box>
          </List>
        </Box>
      </GuestLayoutNavDrawer>
    </Box>
  );
};

export default GuestLayoutHeaderDrawer;
