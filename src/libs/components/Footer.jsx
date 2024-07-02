import React from "react";
import {
  StyledFooter,
  StyledSocialMedia,
  StyledSocialIcon,
} from "../design-system";

/**
 * A component that displays a footer with social media links.
 *
 * @component
 * @returns {JSX.Element} - The rendered component.
 */
export const Footer = () => {
  const socialMediaLinks = [
    {
      href: "https://www.facebook.com/loganthomasmusic",
      alt: "Black & white Facebook logo",
      src: "img/svg/facebook_icon.svg",
    },
    {
      href: "https://www.instagram.com/loganthomasmusic",
      alt: "Black & white Instagram logo",
      src: "img/svg/instagram_icon.svg",
    },
    {
      href: "https://www.youtube.com/loganthomasmusic",
      alt: "Black & white YouTube logo",
      src: "img/svg/youtube_icon.svg",
    },
  ];

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
