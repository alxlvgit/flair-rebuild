import logo from "../assets/logo.png";
import { MainMenuItems } from "./MainMenuItems";
import { ProfileMenu } from "./ProfileMenu";

export const MainMenu = () => {
  return (
    <div className="w-full flex justify-between px-4 bg-[#212529]">
      <a href="/" className="flex items-center">
        <img src={logo} alt="logo" width={150} height={150} />
      </a>
      <div className="w-full flex justify-center">
        <MainMenuItems />
      </div>
      <div className="flex items-center">
        <ProfileMenu />
      </div>
    </div>
  );
};
