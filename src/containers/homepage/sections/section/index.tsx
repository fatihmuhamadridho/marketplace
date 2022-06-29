const SectionHomepage = ({ children, title }: any) => {
  return (
    <>
      <div className="py-[27px] w-full flex justify-between items-center text-[#E9035F]">
        <h1 className="font-medium text-[32px] cursor-pointer">{title}</h1>
        <p className="font-semibold cursor-pointer">View All {">"}</p>
      </div>
      <div className="grid lg:grid-cols-4 grid-rows-[320px] gap-x-[21px] gap-y-9 sm:grid-cols-2">
        {children}
      </div>
    </>
  );
};

export default SectionHomepage;
