import { GetStaticProps } from "next";
import Link from "next/link";

import Layout from "../../src/components/Layout";
import List from "../../src/components/List";
import { UserType } from "../../src/types";
import { sampleUserData } from "../../src/utils/sample-data";

type Props = {
  items: UserType[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: UserType[] = sampleUserData;
  return { props: { items } };
};

export default WithStaticProps;
