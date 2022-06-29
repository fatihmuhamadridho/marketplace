const Card = ({ product }: any) => {
  return (
    <div className="w-full max-w-[241px] h-full flex flex-col items-center border-solid border-[1px] border-[black] bg-[white] cursor-pointer">
      <div className="my-[14px] mx-[15px] w-[211px] h-[224px] flex justify-center items-center bg-[white]">
        <img className="h-[224px]" src={product?.image} alt="" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-center font-semibold">
          {product?.title?.length > 20
            ? product?.title?.substr(0, 20) + "..."
            : product?.title}
        </h1>
        <div className="flex items-center space-x-2">
            <p className="text-[12px] text-[gray]">$1,432</p>
            <h1 className="text-[20px]">$1,432</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
