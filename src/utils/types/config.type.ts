import i18n from "i18next";

export type ModeSite = "dark" | "light";
export type LngSite = "es" | "en";

export type LngsOptsType = {
  value: LngSite;
  label: string;
};

export const lngsOpts: LngsOptsType[] = [
  { value: "es", label: i18n.t("lng_es") },
  { value: "en", label: i18n.t("lng_en") },
];

export type ConfigAction =
  | { type: "SET_MODE"; payload: { mode: ModeSite } }
  | { type: "SET_LNG"; payload: { lng: LngSite } }
  | { type: "RESTORE"; payload: { lng: LngSite; mode: ModeSite } }
  | { type: "RESET" }
  | { type: "DEFAULT"; payload: { lng: LngSite; mode: ModeSite } };
