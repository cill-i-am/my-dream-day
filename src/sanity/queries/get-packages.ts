import { Package } from "../../../sanity.types";
import { sanityFetch } from "../lib/live";

const PACKAGE_QUERY = `*[_type == "package"] | order(order asc)`;

const getPackages = async (): Promise<Package[]> => {
  const { data: packages } = await sanityFetch({
    query: PACKAGE_QUERY,
  });
  return packages;
};

export default getPackages;
