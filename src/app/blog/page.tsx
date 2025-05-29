import { client } from '@/lib/sanity';
import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

type Category = {
  _id: string;
  title: string;
};

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage?: { asset: { url: string } };
  author?: {
    name: string;
    image?: { asset?: { url: string } };
  };
  categories?: Category[];
};


export default async function BlogListPage() {
  const categories: Category[] = await client.fetch(`
    *[_type == "category"]{
      _id,
      title
    }
  `);

  const posts: Post[] = await client.fetch(`
  *[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    mainImage {
      asset -> { url }
    },
    author -> {
      name,
      image {
        asset -> { url }
      }
    },
    categories[]->{
      _id,
      title
    }
  }
`);


  return (
  <section className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row gap-8">
    {/* Main Blog Posts */}
    <div className="w-full lg:w-3/4 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <Link
          key={post._id}
          href={`/blog/${post.slug.current}`}
          className="group border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white dark:bg-zinc-900"
        >
          {post.mainImage?.asset?.url && (
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-1 group-hover:text-primary">
              {post.title}
            </h2>
            <p className="text-xs text-muted-foreground mb-2">
              {post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString()
                : 'No date'}
            </p>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-2">
              {post.categories?.map((cat) => (
                <span
                  key={cat._id}
                  className="text-xs px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-gray-600 dark:text-gray-300"
                >
                  {cat.title}
                </span>
              ))}
            </div>

            {/* Author */}
            {post.author?.name && (
              <div className="flex items-center gap-2 mt-4">
                {post.author.image?.asset?.url && (
                  <Image
                    src={post.author.image.asset.url}
                    alt={post.author.name}
                    width={24}
                    height={24}
                    className="rounded-full object-cover w-6 h-6"
                  />
                )}
                <span className="text-xs text-muted-foreground">{post.author.name}</span>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>

    {/* Category Sidebar */}
    <aside className="w-full lg:w-1/4 order-last lg:order-none">
      <div className="border rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <button
              key={cat._id}
              className="px-3 py-2 text-sm text-left border rounded hover:bg-primary hover:text-white transition"
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>
    </aside>
  </section>
);

}
