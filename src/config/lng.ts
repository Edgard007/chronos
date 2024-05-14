// Type
import { LngSite } from "@utils/types/config.type";

// Reducer
import { STORAGE_KEY } from "@reducers/config.reducer";

// Init config i18n
const STORAGE = localStorage.getItem(STORAGE_KEY);

// Get device language
const DEVICE_LNG = window.navigator.language.split("-")[0];

// Set default language
const DEFAULT_LNG: LngSite = DEVICE_LNG === "es" ? "es" : "en";

// Get language from localStorage
const LNG: LngSite = STORAGE
  ? JSON.parse(STORAGE)?.language ?? DEFAULT_LNG
  : DEFAULT_LNG;

export { LNG, DEFAULT_LNG };
