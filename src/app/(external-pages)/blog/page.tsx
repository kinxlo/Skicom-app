"use client";

import Link from "next/link";
import { useState } from "react";
import { LuChevronLeft } from "react-icons/lu";

import { ArticlesCard } from "~/components/common/articles-card/articles-card";
import { Paginations } from "~/components/layout/pagination/pagination";
import { Wrapper } from "~/components/layout/wrapper";
import { Button } from "~/components/ui/button";
import { articles } from "~/utils/constants";

const itemsPerPage = 6; // Number of articles per page

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  // Calculate the articles to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArticles = articles.slice(startIndex, startIndex + itemsPerPage);

  // Function to handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="bg-[#F6F6F6]">
      <Wrapper className="pt-32 lg:pt-40">
        <Link
          href={"faq"}
          className="flex items-center gap-3 text-[17px] font-medium text-primary xl:text-[26px]"
        >
          <span>
            <LuChevronLeft size={20} />
          </span>
          Back to Customer Care
        </Link>

        <div className="mt-10 lg:mt-[42px]">
          <h2 className="text-neutral-dark-1 text-[28px] font-semibold xl:text-[44px]">
            All Articles
          </h2>
          <p className="mt-2 text-[17px] xl:text-[20px]">
            Read everything you need to know about our products and services.
          </p>
        </div>

        <section>
          <div className="mt-8 grid w-full grid-cols-1 gap-7 md:grid-cols-2">
            {currentArticles.map((article) => (
              <ArticlesCard
                key={article.id}
                articleImage={article.articleImage}
                heading={article.heading}
                dateSent={article.dateSent}
                subHeading={article.subHeading}
              />
            ))}
          </div>

          <div className="space-y-5 py-7 text-center text-sm">
            <Paginations
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
            <div className="flex items-center justify-center">
              <Button
                asChild
                variant={`link`}
                className="text-neutral-dark-1 text-lg underline"
              >
                <Link href="#">Back To Top</Link>
              </Button>
            </div>
          </div>
        </section>
      </Wrapper>
    </main>
  );
};

export default Blog;
