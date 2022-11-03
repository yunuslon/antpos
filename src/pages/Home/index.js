import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Logo } from "../../assets/img";
import { MenuState } from "../../state/recoil";
import { GetMenu, LoginServ } from "../../state/service";

export default function Home() {
  const menu = useRecoilValue(MenuState);
  useEffect(() => {
    GetMenu();
    LoginServ();
  }, []);
  console.log(menu);
  return (
    <div className="bg-indigo-700 h-screen flex justify-center flex-col items-center">
      <p>dd</p>
    </div>
  );
}
