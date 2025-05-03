import { Service } from "../../../sanity.types";
import { sanityFetch } from "../lib/live";

const SERVICE_QUERY = `*[_type == "service"] | order(order asc)`;

const getServices = async (): Promise<Service[]> => {
  const { data: services } = await sanityFetch({
    query: SERVICE_QUERY,
  });
  return services;
};

export default getServices;
