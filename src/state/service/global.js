import { setRecoil } from "recoil-nexus";
import { API_HOST } from "../../config";
import { getData } from "../../utils";
import { MenuState } from "../recoil";

export const GetMenu = async () => {
  // getData("token").then(async (token) => {
  await fetch(`${API_HOST.url}/menu`, {
    method: "get",
    headers: {
      // Authorization: `Bearer "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Njc1Nzc5MzQsInJvbGUiOjEsInVzZXJfaWQiOjF9.r8Y-wQUtp9AEYBk1KRF94YGg57NGbbaD7YjbxvBEiVw"`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((respose) => respose.json())
    .then((res) => {
      setRecoil(MenuState, res);
    })
    .catch((e) => {
      console.log(e);
    });
  // });
};
