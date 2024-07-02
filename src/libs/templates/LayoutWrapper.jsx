import React from "react";
import PropTypes from "prop-types";
import { Container, Content } from "../design-system";
import { Footer, Header } from "../components";

/**
 * A component that wraps the layout with an AppBar and menu items.
 *
 * @component
 * @param {string} img_uri - The URI of the logo image.
 * @param {Array<{ Menu: string, link: string }>} menuItems - The list of menu items, each containing a Menu label and a link.
 * @param {Function} handleMenuClick - The function to be called when a menu item is clicked.
 * @param {React.ReactNode} children - The children components to be rendered within the layout.
 * @param {Array<{ href: string, alt: string, src: string }>} socialMediaLinks - The list of social media links, each containing an href, alt text, and src for the icon image.
 * @returns {JSX.Element} - The rendered component.
 */
export const LayoutWrapper = ({
  img_uri,
  menuItems,
  children,
  handleMenuClick,
  socialMediaLinks,
}) => {
  return (
    <Container>
      <Header
        img_uri={img_uri}
        menuItems={menuItems}
        handleMenuClick={handleMenuClick}
      />
      <Content>{children}</Content>
      <Footer socialMediaLinks={socialMediaLinks} />
    </Container>
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
  handleMenuClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  socialMediaLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};
