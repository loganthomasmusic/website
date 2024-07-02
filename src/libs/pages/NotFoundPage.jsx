import { Container, Content, StyledButton } from "../design-system";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Content>
        <h1>404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <StyledButton onClick={() => navigate("/")}>Go Home</StyledButton>
      </Content>
    </Container>
  );
};
