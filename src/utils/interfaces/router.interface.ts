// ==> Types
import { TypeRoute, AccessRoute } from "@utils/types/router.type";

export interface Routers {
  path: string;
  element: JSX.Element | JSX.Element[];
  type: TypeRoute;
  access: AccessRoute;
}