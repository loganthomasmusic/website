import React from "react";
import { styled } from "@mui/material/styles";

export function Footer() {
  const StyledFooter = styled("footer")({
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  });

  const StyledSocialMedia = styled("div")({
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  });

  const StyledSocialIcon = styled("img")({
    width: "30px",
    height: "30px",
  });

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
