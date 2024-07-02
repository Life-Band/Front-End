import { deleteCookie, getCookie, setCookie } from "cookies-next";

export async function getSession() {
  const token = getCookie("session_token") ?? "";

  if (!token){
    return null;
  }

  return token;
}

export function sessionLogin(token: string){
  setCookie("session_token", token);
}

