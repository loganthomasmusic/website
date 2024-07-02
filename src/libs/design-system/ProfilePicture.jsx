import { styled } from "@mui/material/styles";

export const ProfilePicture = styled("img")({
  objectFit: "cover",
  borderRadius: "50%",
  border: "2px solid #333",
  boxShadow: "0 0 10px 0 #333",
  transition: "all 0.3s",
  "&:hover": {
    transform: "scale(1.017)",
  },
});
