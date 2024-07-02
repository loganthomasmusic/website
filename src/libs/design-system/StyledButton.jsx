import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)({
  backgroundColor: "#333",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#444",
  },
});
