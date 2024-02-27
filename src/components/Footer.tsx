import FooterLinks from "./FooterLinks";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-4 w-full  bg-black text-white">
      <div className="grid grid-cols-1 gap-6 sm:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-0 md:gap-3 lg:grid-cols-6 w-5/6 sm:py-8 pt-8 pb-2 h-fit mb-8">
        <FooterLinks />
      </div>
      <p className="text-sm text-center sm:text-start  text-gray-400  w-5/6">
        &copy; 2024 Oleksandr Levchuk - Flair Airlines Website Redesign
      </p>
    </footer>
  );
};
