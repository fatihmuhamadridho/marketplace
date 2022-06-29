import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, TypedDispatch } from "src/redux/store";
import { getAllProducts } from "../../redux/actions/product";

import Card from "src/components/cards";

const HomePage = () => {
  const dispatch: TypedDispatch = useDispatch();
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const state = selector((state: any) => state);
  const [bestSellers, setBestSellers] = useState<any>();

  useEffect(() => {
    if (state.product.isSuccess && bestSellers === undefined) {
        setBestSellers(state.product.products.map((product: any) => product.rating.count))
    } else if (!state.product.isSuccess) {
        dispatch(getAllProducts());
    }
  }, [bestSellers, dispatch, state.product.isSuccess, state.product.products]);

  console.log("products", state.product);
  console.log("bestSellers", bestSellers)

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
        <div className="w-full">
          <div className="w-full flex justify-between">
            <h1>Bestsellers</h1>
            <p>View All {">"}</p>
          </div>
        </div>{" "}
        <div>
            {bestSellers?.sort((a: any, b: any) => b-a)}
          <Card />
        </div>
      </div>
    </>
  );
};

export default HomePage;
