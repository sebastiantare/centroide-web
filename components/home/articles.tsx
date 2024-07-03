import { sql } from "@vercel/postgres";
import NewsList from "../article/news-list";
import type { Article } from "types/types";

export default async function Articles({ }): Promise<JSX.Element> {
  const { rows } = await sql`
    SELECT  article_hash, 
          article_title, 
          category, 
          source_entity,
          generated_summary, 
          article_link, 
          view_count, 
          importance_score, 
          negative_score, 
          a.publish_date 
    AT TIME ZONE 'America/Santiago' as publish_date
    FROM articles a 
    WHERE publish_date >= NOW() - interval'24 hours' order by publish_date desc;
  `;

  return (
    <div>
      <NewsList rows={rows as Article[]} />
    </div>
  );
}
