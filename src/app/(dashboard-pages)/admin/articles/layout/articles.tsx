"use client";

import Link from "next/link";
import { useState } from "react";

import { ArticlesCard } from "~/components/common/articles-card/articles-card";
import { articles } from "~/utils/constants";

const itemsPerPage = 6; // Number of articles per page

export const ArticleLayout = () => {
  const [currentPage] = useState(1);

  // Calculate the total number of pages
  // const totalPages = Math.ceil(articles.length / itemsPerPage);

  // Calculate the articles to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArticles = articles.slice(startIndex, startIndex + itemsPerPage);

  // Function to handle page change
  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  // };

  return (
    <section>
      <section>
        <div className="mt-8 grid w-full grid-cols-1 gap-7 md:grid-cols-2 2xl:grid-cols-3">
          {currentArticles.map((article) => (
            <Link key={article.id} href="articles/83943049">
              <ArticlesCard
                articleImage={article.articleImage}
                heading={article.heading}
                dateSent={article.dateSent}
                subHeading={article.subHeading}
              />
            </Link>
          ))}
        </div>

        {/* <div className="space-y-5 py-7 text-center text-sm">
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
        </div> */}
      </section>
    </section>
  );
};
