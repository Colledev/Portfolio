const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full border-t border-white/10 bg-[#171a1f]">
      <div className="container mx-auto flex justify-center items-center h-12">
        <p className="text-zinc-200 text-sm">© {currentYear} Gabriel Colle</p>
      </div>
    </div>
  );
};

export default Footer;
