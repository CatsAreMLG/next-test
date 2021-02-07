import Cosmic from "cosmicjs";

const BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG;
const READ_KEY = process.env.COSMIC_READ_KEY;

const bucket = Cosmic().bucket({
  slug: BUCKET_SLUG,
  read_key: READ_KEY,
});


import ArticleList from '../components/ArticleList/ArticleList'

export default function Home({articles}) {
  return (
    <>
      <ArticleList articles={articles} />
    </>
  );
}

export const getStaticProps = async () => {
  const data = await bucket.getObjects({
    type: "posts",
    props: "slug,title,content,metadata", // Limit the API response data by props
  });
  const articles = await data.objects;
  return {
    props: {
      articles,
    },
  };
}


