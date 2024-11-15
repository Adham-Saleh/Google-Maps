import { object, string, number, ref } from "yup";
import { useI18n } from "#build/imports";

export const locationForm = () => {
  const { t } = useI18n();

  return object({
    location: string().matches(/^[A-Za-z]/, t("locationError")),
    lng: number().typeError(t("longitudeError")),
    lat: number().typeError(t("latitudeError")),
    country: string().matches(/^[A-Za-z]+$/, t("countryError")),
    state: string().matches(/^[A-Za-z]+$/, t("stateError")),
  });
};
