import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";
import Link from "next/link";

export const metadata = {
  title: "reviews",
};

export default async function ReviewsPage() {
  const reviewsfiles = await getReviews();
  console.log("[ReviewsPage] reviews:", reviewsfiles);
  return (
    <>
      <Heading>Reviews</Heading>
      <p>Here we'll list all the reviews.</p>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviewsfiles.map((file) => (
          <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
            <Link href={`/reviews/${file.slug}`}>
              <img
                src={file.image}
                alt="img"
                width="320"
                height="180"
                className="rounded-t"
              />
              <h2 className="py-1 text-center">{file.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
