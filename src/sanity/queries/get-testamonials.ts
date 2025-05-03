import { Testimonial } from "../../../sanity.types";
import { sanityFetch } from "../lib/live";

const TESTAMONIAL_QUERY = `*[_type == "testimonial"] | order(order asc)`;

const getTestamonials = async (): Promise<Testimonial[]> => {
  const { data: testamonials } = await sanityFetch({
    query: TESTAMONIAL_QUERY,
  });
  return testamonials;
};

export default getTestamonials;
