export interface Article {
  article_hash: string;
  article_title: string;
  category: string;
  publish_date: string;
  article_body: string;
  raw_content: string;
  source_entity: string;
  article_link: string;
  generated_summary: string;
  negative_score: number;
  importance_score: number;
  view_count: number;
}
