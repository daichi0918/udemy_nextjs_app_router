import { paths } from '@/app/020_SG/paths';
import { ENDPOINT } from '@/constants';
import Article from '../../../components/article';

export default async function Detail({ params }) {
  const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
    res.json()
  );
  return (
    <>
      <Article data={article} />
    </>
  );
}

export async function generateStaticParams() {
  return paths;
}
