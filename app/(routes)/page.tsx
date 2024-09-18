//*this if going to  be the page everything that has isFeatured: true will show on

import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

//? This is the revalidate prop, which specifies how often the page should be revalidated with a cache-control header. If set to 0, the page will never be cached. In this case, we want the page to be cached for as long as possible, so we set it to 0.
export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("35015e66-bf1c-4a76-8eb4-54c302b3e1f2");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
