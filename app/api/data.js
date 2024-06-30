// pages/api/data.js
import { Pool } from 'pg';

const pool = new Pool();

export default async function handler(req, res) {
  try {
    const result = await pool.query('SELECT * FROM articles ORDER BY publish_date DESC LIMIT 20;');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
