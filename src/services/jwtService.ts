import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  exp: number;
  iss: string;
  aud: string;
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": string;
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string;
}

export const getToken = (): string | undefined => {
  const userName = localStorage.getItem("userName");
  const token = localStorage.getItem("token");
  if (!token || !userName || isTokenExpired(token)) {
    // token is missing or expired
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
  } else {
    return token;
  }
};

export const getLocalStorageUserName = (): string | undefined => {
  const userName = localStorage.getItem("userName");
  const token = localStorage.getItem("token");
  if (!token || !userName || isTokenExpired(token)) {
    // token is missing or expired
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
  } else {
    return userName;
  }
};

export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded: JwtPayload = jwtDecode(token);
    const now = Math.floor(Date.now() / 1000); // current time in seconds
    return decoded.exp < now;
  } catch {
    return true; // invalid token = expired
  }
};
