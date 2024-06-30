'use client'
import { motion } from "framer-motion";
import type { Article } from "types/types"
import Image from "next/image";
import { marked } from "marked";

const NewsArticle = ({ article }: { article: Article }) => {
  const { publish_date, generated_summary, source_entity, category } = article;
  const image_location = 'https://media.biobiochile.cl/wp-content/uploads/2024/06/alcaldesa-hassler-en-cuenta-publica-de-santiago-hemos-cumplido-en-un-93-el-programa-comprometido-750x400.png';

  const htmlSummary = marked(generated_summary.replaceAll('**', ''));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-white shadow-lg rounded-md mb-4"
    >
      <div className="flex flex-col items-center">

        <div className="flex flex-row justify-between w-full p-4">
          <div dangerouslySetInnerHTML={{ __html: htmlSummary }} className="prose text-sm font-normal text-left" />
          <div>
            <Image width={240} height={120} className="w-64 h-64 object-cover rounded-md mb-4" src={image_location} />
          </div>
        </div>

        <div className="flex flex-row justify-between w-full px-4">
          <div className="text-sm text-gray-600 mb-2">{new Date(publish_date).toLocaleString()}</div>
          <div className="text-sm text-gray-600 mb-4">{source_entity +  "/" + category}</div>
        </div>

      </div>


    </motion.div>
  );
};

export default NewsArticle;

