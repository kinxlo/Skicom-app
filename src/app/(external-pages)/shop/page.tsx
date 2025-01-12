import { Categories } from "./_views/categories";
import { FeaturedProducts } from "./_views/featured-products";
import { Hero } from "./_views/hero";
import { ListContent } from "./_views/list-content";
import { PopularProducts } from "./_views/popular-products";

const Page = () => {
  return (
    <>
      <Hero />
      <ListContent />
      <Categories />
      <PopularProducts />
      <FeaturedProducts />
    </>
  );
};
export default Page;
