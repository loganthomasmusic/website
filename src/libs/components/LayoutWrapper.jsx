import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

/**
 * A component that wraps the layout with an AppBar and menu items.
 *
 * @component
 * @param {string} img_uri - The URI of the logo image.
 * @param {Array<{ Menu: string, link: string }>} menuItems - The list of menu items, each containing a Menu label and a link.
 * @param {React.ReactNode} children - The children components to be rendered within the layout.
 * @returns {JSX.Element} - The rendered component.
 */
export const LayoutWrapper = ({ img_uri, menuItems, children }) => {
  const navigate = useNavigate();

  const handleMenuClick = (link) => {
    navigate(link);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={img_uri} alt="Logo" />
          </Typography>
          {menuItems.map((menuItem, index) => (
            <Button
              key={index}
              color="inherit"
              onClick={() => handleMenuClick(menuItem.link)}
            >
              {menuItem.Menu}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};

LayoutWrapper.propTypes = {
  img_uri: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      Menu: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  children: PropTypes.node.isRequired,
};
