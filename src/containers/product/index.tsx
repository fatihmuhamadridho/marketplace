import { Helmet, HelmetProvider } from "react-helmet-async";
import BasicBreadcrumbs from "src/components/mui/breadcrumb";
import SimpleAccordion from "src/components/mui/accordion";

const ProductPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Product</title>
        </Helmet>
      </HelmetProvider>
      <div className="w-full max-w-[1020px] mx-auto">
        <div className="py-7">
          <BasicBreadcrumbs />
        </div>
        <div className="flex">
            <div>
                <SimpleAccordion />
            </div>
            <div>
                <img src="/images/banners/banner_product.png" alt="" />
            </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
