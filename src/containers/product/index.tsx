import { Helmet, HelmetProvider } from "react-helmet-async";
import BasicBreadcrumbs from "src/components/mui/breadcrumb";
import SimpleAccordion from "src/components/mui/accordion";
import Card from "src/components/core/cards";

const ProductPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Product</title>
        </Helmet>
      </HelmetProvider>
      <div className="w-full px-8 max-w-[1084px] mx-auto">
        <div className="py-7">
          <BasicBreadcrumbs />
        </div>
        <div className="flex space-x-[18px]">
            <div>
                <SimpleAccordion />
                <SimpleAccordion />
                <SimpleAccordion />
                <SimpleAccordion />
                <SimpleAccordion />
            </div>
            <div>
                <img src="/images/banners/banner_product.png" alt="" />
                <div>
                    <div className="flex justify-between">
                    <p>Result:122</p>
                    <p>Sort by</p>
                    </div>
                    <div className="grid grid-cols-3 gap-[19px]">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
