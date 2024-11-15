import { object, string, number, ref } from "yup";

export const locationFormSchema = object({
  location: string().matches(
    /^[A-Za-z]+$/,
    "Location must be a combination of legal alphabetical letters A-Z"
  ),
  lng: number().typeError("Longitude must be a number"),
  lat: number().typeError("Latitude must be a number"),
  country: string().matches(
    /^[A-Za-z]+$/,
    "Country must be a combination of legal alphabetical letters A-Z"
  ),
  state: string().matches(
    /^[A-Za-z]+$/,
    "State must be a combination of legal alphabetical letters A-Z"
  ),
});
