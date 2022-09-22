import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { UserType } from "../../src/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch("http://localhost:3000/api/users");
  const users: any[] = await response.json();
  console.log("users", users);
  const fields: ISitemapField[] = users.map((user: UserType) => ({
    loc: `https://example.com/users/${user.id}`,
    lastmod: new Date().toISOString(),
  }));
  return getServerSideSitemap(context, fields);
};

const ServerSitemap = () => {};
export default ServerSitemap;
