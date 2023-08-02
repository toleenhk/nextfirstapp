import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export async function reviews(slug) {
  const text = await readFile(`./content/reviews/${slug}.md`, "utf8");
  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const body = marked(content, { headerIds: false, mangle: false });
  return { slug, title, date, image, body };
}

export async function getReviews() {
  const slugs = await getSlugs();
  console.log("hiiiiii", slugs);
  const reviewsall = [];
  for (const slug of slugs) {
    const review = await reviews(slug);
    reviewsall.push(review);
  }
  reviewsall.sort((a, b) => b.date.localeCompare(a.date));

  return reviewsall;
}

export async function getSlugs() {
  const files = await readdir("./content/reviews");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length)); // -".md".length it means -2  This means the extraction will stop two characters before the end of the file string.
}
