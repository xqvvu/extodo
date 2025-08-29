import qs from "qs";
import useFetch from "@/composables/use-fetch";

export function signIn() {
  const url = `/auth/sign-in?${qs.stringify({ ts: Date.now() })}`;
  return useFetch(url).post();
}
