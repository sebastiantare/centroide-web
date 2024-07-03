// pages/api/data.js
import { Pool } from 'pg';

const pool = new Pool();

export default async function handler(req, res) {
  try {
    const result = await pool.query(`
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
  `);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
