"use client";

import { useState } from "react";

import { Paginations } from "~/components/layout/pagination/pagination";
import { Wrapper } from "~/components/layout/wrapper";
import { products } from "~/utils/constants";
import { ShopCard } from "../_components/shop-card";

const ITEMS_PER_PAGE = 8;

export const PopularProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = products.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <Wrapper className="py-16">
      <h2 className="mb-8 text-center text-3xl font-semibold">
        Popular Products
      </h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {currentProducts.map((product) => (
          <ShopCard
            key={product.id}
            id={product.id}
            category={product.category}
            title={product.title}
            rating={product.rating}
            price={product.price}
            oldPrice={product.oldPrice}
            image={product.image}
          />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Paginations
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </Wrapper>
  );
};
