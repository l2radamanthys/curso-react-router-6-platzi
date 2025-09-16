import React from "react";
import { useAuth } from "../../auth";

function UnauthorizedPage() {
  const auth = useAuth();
  const redirect = auth.redirect;
  React.useEffect(() => {
    auth.setRedirect(null);
  }, []);
  return <p>No tienes permiso para acceder a: {redirect}</p>;
}

export { UnauthorizedPage };
