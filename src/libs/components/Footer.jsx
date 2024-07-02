import React from "react";
import PropTypes from "prop-types";
import {
  StyledFooter,
  StyledSocialMedia,
  StyledSocialIcon,
} from "../design-system";

/**
 * A component that displays a footer with social media links.
 *
 * @component
 * @param {Array<{ href: string, alt: string, src: string }>} socialMediaLinks - The list of social media links, each containing an href, alt text, and src for the icon image.
 * @returns {JSX.Element} - The rendered component.
 */
export const Footer = ({ socialMediaLinks }) => {
  return (
    <StyledFooter>
      <p>Find me on</p>
      <StyledSocialMedia>
        {socialMediaLinks.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noreferrer">
            <StyledSocialIcon src={link.src} alt={link.alt} />
          </a>
        ))}
      </StyledSocialMedia>
    </StyledFooter>
  );
};

Footer.propTypes = {
  socialMediaLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};
