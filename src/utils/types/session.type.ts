// Interface
import { User, Session } from "@interfaces/session.interface";

export type SessionAction =
  | { type: "LOGIN"; payload: { user: User; session: Session } }
  | { type: "LOGOUT" }
  | { type: "RESET" }
  | { type: "RESTORE"; payload: { user: User; session: Session } }
  | { type: "UPDATE"; payload: { user: User; session: Session } };
