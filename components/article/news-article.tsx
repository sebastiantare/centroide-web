'use client'
import { motion } from "framer-motion";
import type { Article } from "types/types"
import Image from "next/image";
import { marked } from "marked";
import { useState } from "react";

const NewsArticle = ({ article, image_src }: { article: Article, image_src: string | null }) => {
  const { article_title, publish_date, generated_summary, source_entity, category, article_link } = article;

  const htmlSummary = marked(generated_summary.replaceAll('**', ''));

  const [active, setActive] = useState(false);

  /*
    ## Title\n\n
    * Bulletpoint\n
   */
  const articleParts = generated_summary.split('\n');
  const title = articleParts[0].replaceAll('#', '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-white shadow-lg rounded-md mb-4"
    >
      <div className="flex flex-col items-center">
        {active ? (
          <div className="flex flex-col md:flex-row justify-between w-full p-4">
            {image_src && (
              <div className="w-full md:w-auto mb-4 md:mb-0 md:mr-4">
                <Image
                  alt={article_title}
                  width={240}
                  height={120}
                  className="w-full md:w-72 h-64 object-cover rounded-md"
                  src={image_src}
                />
              </div>
            )}
            <div className="flex-grow">
              <div
                dangerouslySetInnerHTML={{ __html: htmlSummary }}
                className="prose text-sm font-normal text-left"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-row justify-between w-full p-4">
            <div className="font-black text-xl m-6">
              <button onClick={() => setActive(!active)}>{title}</button>
            </div>
            <div></div>
          </div>
        )}
        <div className="flex flex-col sm:flex-row justify-between w-full px-4">
          <div className="text-sm text-gray-600 mb-2 sm:mb-0">
            {new Date(publish_date).toLocaleString()}
          </div>
          <a
            href={article_link}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-blue-600"
          >
            {source_entity + "/" + category}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsArticle;

