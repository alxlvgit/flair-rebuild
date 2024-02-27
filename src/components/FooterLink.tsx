const FooterLink = ({
  title,
  links,
  children,
}: {
  title: string;
  links: string[];
  children?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col w-full items-start h-full align-top justify-start">
      <h1 className="text-xl font-bold p-2">{title}</h1>
      {links.map((link, index) => (
        <a
          key={index}
          href="#"
          className="p-2 text-sm text-gray-200 hover:underline"
        >
          {link}
        </a>
      ))}
      {children}
    </div>
  );
};

export default FooterLink;
