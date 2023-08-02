import Heading from "@/components/Heading";
import { exo2 } from "@/app/fonts";
import { reviews, getSlugs } from "@/lib/reviews";
import ShareButtonOptions from "@/components/ShareButtonOptions";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const review = await reviews(slug);
  return {
    title: review.title,
  };
}

export default async function ReviewPage({ params: { slug } }) {
  const review = await reviews(slug);
  return (
    <>
      <Heading>{review.title}</Heading>
      <div className=" flex items-baseline gap-4">
        <p className="italic pb-2">{review.date}</p>
        <ShareButtonOptions />
      </div>
      <img
        src={review.image}
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <article
        className="prose max-w-screen-sm"
        dangerouslySetInnerHTML={{ __html: review.body }}
      />
    </>
  );
}
