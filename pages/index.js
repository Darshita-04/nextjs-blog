import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Alert from '../components/alert';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';


export async function getStaticProps() {
  const result = getSortedPostsData();
  return {
    props: {
      result,
    },
  };
}

// export async function getStaticProps() {
//   const url = `https://jsonplaceholder.typicode.com/users`
//   const result = await fetch(url)
//   return { props: {
//     result: await result.json()
//   }}
// }

export default function Home({ result }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <Alert type="error">{siteTitle}</Alert>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {result.map(({id,title,date}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}