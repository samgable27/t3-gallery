import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/db7d4eb1-6c59-46d8-ac6f-483889a3b90f-c1zroy.png",
  "https://utfs.io/f/756ab025-7078-41ab-beb4-c6c53ba8c815-oduwqt.png",
  "https://utfs.io/f/1e9beceb-8c2f-49a5-b3c5-449658ee6eb8-oduwqu.png",
  "https://utfs.io/f/d224040e-328e-48a0-a33c-8f7dca0ff487-yfyevc.jpg",
];

const mockImages = mockUrls.map((url, i) => ({
  id: i + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-x-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
