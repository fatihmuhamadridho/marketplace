import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, TypedDispatch } from "src/redux/store";
import { getAllProducts } from "../../redux/actions/product";

import Card from "src/components/core/cards";
import SectionHomepage from "./sections/section";

const HomePage = () => {
  const dispatch: TypedDispatch = useDispatch();
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const state = selector((state: any) => state);
  const [bestSellers, setBestSellers] = useState<any>();

  useEffect(() => {
    if (state.product.isSuccess && bestSellers === undefined) {
      setBestSellers(
        state.product.products.map((product: any) => product.rating.count)
      );
    } else if (!state.product.isSuccess) {
      dispatch(getAllProducts());
    }
  }, [bestSellers, dispatch, state.product.isSuccess, state.product.products]);

  // state?.product?.products?.sort((a: any, b: any) => Number(b.rating.count) - Number(a.rating.count))

  console.log("products", state.product);
  console.log("bestSellers", bestSellers);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>FAP Marketplace</title>
        </Helmet>
      </HelmetProvider>
      <div>
        <div className="flex justify-center bg-primary">
          <img
            src="./images/banners/banner.png"
            alt=""
            width={829}
            height={523}
          />
        </div>
        {/* {bestSellers?.sort((a: any, b: any) => {
          return <div>{b - a}</div>;
        })} */}
        <div className="w-full h-full max-w-[1030px] mx-auto">
          <SectionHomepage title={"Bestsellers"}>
            {state.product.products.map((bestSeller: any, index: any) => {
              if (index < 4) {
                return <Card key={index} product={bestSeller} />;
              }
              return false;
            })}
          </SectionHomepage>

          <SectionHomepage title={"Product"}>
            {state.product.products.map((bestSeller: any, index: any) => {
              if (index < 8) {
                return <Card key={index} product={bestSeller} />;
              }
              return false;
            })}
          </SectionHomepage>
        </div>
      </div>
    </>
  );
};

export default HomePage;
