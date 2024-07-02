import React from "react";
import {
  StyledFooter,
  StyledSocialMedia,
  StyledSocialIcon,
} from "../design-system";
export function Footer() {
  return (
    <StyledFooter>
      <p>Find me on</p>
      <StyledSocialMedia>
        <a
          href="https://www.facebook.com/loganthomasmusic"
          target="_blank"
          rel="noreferrer"
        >
          <StyledSocialIcon
            src="img/svg/facebook_icon.svg"
            alt="Black & white Facebook logo"
          />
        </a>
        <a
          href="https://www.instagram.com/loganthomasmusic"
          target="_blank"
          rel="noreferrer"
        >
          <StyledSocialIcon
            src="img/svg/instagram_icon.svg"
            alt="Black & white Instagram logo"
          />
        </a>
        <a
          href="https://www.youtube.com/loganthomasmusic"
          target="_blank"
          rel="noreferrer"
        >
          <StyledSocialIcon
            src="img/svg/youtube_icon.svg"
            alt="Black & white YouTube logo"
          />
        </a>
      </StyledSocialMedia>
    </StyledFooter>
  );
}
