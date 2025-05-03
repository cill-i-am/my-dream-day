import { Team } from "../../../sanity.types";
import { sanityFetch } from "../lib/live";

const TEAM_QUERY = `*[_type == "team"] | order(order asc)`;

const getTeam = async (): Promise<Team[]> => {
  const { data: team } = await sanityFetch({
    query: TEAM_QUERY,
  });
  return team;
};

export default getTeam;
