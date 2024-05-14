import { useNavigate } from "react-router-dom";

// Interface
import { Routers } from "@interfaces/router.interface";

// Layout
import LoggedLayout from "@common/layout/Logged";
import PublicLayout from "@common/layout/Public";

// Context
import useSessionContext from "@contexts/useSessionContext";

interface ProtectedRouteProps {
  info: Routers;
  children: JSX.Element | JSX.Element[];
}

const ProtectedRoute = ({ info, children }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const {
    state: {
      session: { isLogeedIn },
    },
  } = useSessionContext();

  if (info?.type === "private") {
    if (isLogeedIn) return <LoggedLayout>{children}</LoggedLayout>;
    else {
      navigate("/login");
      return null;
    }
  }

  if (info?.type === "public") {
    if (!isLogeedIn) return <PublicLayout>{children}</PublicLayout>;
    else {
      navigate("/");
      return null;
    }
  }

  return null;
};

export default ProtectedRoute;
