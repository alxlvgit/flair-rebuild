import { MainMenuItems } from "./MainMenuItems";

export const MainMenu = () => {
  return (
    <div className="w-full hidden lg:grid px-8 bg-[#212529] grid-cols-12 gap-4">
      <a href="/" className="flex items-center col-span-2 py-3">
        <img src="/logo.png" alt="logo" width={120} height={120} />
      </a>
      <div className="w-full col-span-10 flex justify-center">
        <MainMenuItems />
      </div>
    </div>
  );
};
