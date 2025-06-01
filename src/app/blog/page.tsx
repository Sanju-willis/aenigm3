// src\app\blog\page.tsx
import { client } from '@/lib/sanity';
import BlogList from './BlogList';

export const dynamic = 'force-dynamic';

export default async function BlogListPage() {
  const categories = await client.fetch(`*[_type == "category"]{ _id, title }`);

  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      slug,
      publishedAt,
      mainImage { asset -> { url } },
      author -> {
        name,
        image { asset -> { url } }
      },
      categories[]->{
        _id,
        title
      }
    }
  `);

  return <BlogList posts={posts} categories={categories} />;
}
