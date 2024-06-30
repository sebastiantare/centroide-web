import { sql } from "@vercel/postgres";
import NewsList from "../article/news-list";
import type { Article } from "types/types";

export default async function Articles({ }): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from Articles order by publish_date desc limit 20;`;

  return (
    <div>
      <NewsList rows={rows as Article[]} />
    </div>
  );
}
