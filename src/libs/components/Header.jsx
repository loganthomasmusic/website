import React from "react";
import PropTypes from "prop-types";
import { Toolbar, Typography } from "@mui/material";
import { Logo, MenuItem, StyledAppBar } from "../design-system";

/**
 * A component that displays a header with an AppBar and menu items.
 *
 * @component
 * @param {string} img_uri - The URI of the logo image.
 * @param {Array<{ Menu: string, link: string }>} menuItems - The list of menu items, each containing a Menu label and a link.
 * @param {Function} handleMenuClick - The function to be called when a menu item is clicked.
 * @returns {JSX.Element} - The rendered component.
 */
export const Header = ({ img_uri, menuItems, handleMenuClick }) => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Logo src={img_uri} alt="Logo" />
        </Typography>
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={index}
            color="inherit"
            onClick={() => handleMenuClick(menuItem.link)}
          >
            {menuItem.Menu}
          </MenuItem>
        ))}
      </Toolbar>
    </StyledAppBar>
  );
};

Header.propTypes = {
  img_uri: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      Menu: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};
