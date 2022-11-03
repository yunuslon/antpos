import { setRecoil } from "recoil-nexus";
import { API_HOST } from "../../config";
import { getData } from "../../utils";
import { MenuState } from "../recoil";

export const LoginServ = () => {
  fetch(`${API_HOST.url}/auth/login`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: "admin@admin.com", password: "admin" }),
  })
    .then((respose) => respose.json())
    .then((res) => {
      console.log("auth", res);
    })
    .catch((e) => {
      console.log(e);
    });
};
