import Link from "next/link";
import Layout from "../src/components/Layout";

const PrivatePage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>This is a private layout and may not be indexable</h1>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default PrivatePage;
