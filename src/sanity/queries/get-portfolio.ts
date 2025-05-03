import { PortfolioItem } from "../../../sanity.types";
import { sanityFetch } from "../lib/live";

const PORTFOLIO_QUERY = `*[_type == "portfolioItem"] | order(order asc)`;

const getPortfolio = async (): Promise<PortfolioItem[]> => {
  const { data: portfolio } = await sanityFetch({
    query: PORTFOLIO_QUERY,
  });
  return portfolio;
};

export default getPortfolio;
