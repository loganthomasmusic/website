import { useNavigate } from "react-router-dom";

export const useLayoutContainer = () => {
  const navigate = useNavigate();

  const handleMenuClick = (link) => {
    navigate(link);
  };

  return { handleMenuClick };
};
