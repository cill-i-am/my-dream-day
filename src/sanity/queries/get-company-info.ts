import { CompanyInfo } from "../../../sanity.types";
import { sanityFetch } from "../lib/live";

const COMPANY_INFO_QUERY = `*[_type == "companyInfo" && isActive == true][0]`;

const getCompanyInfo = async (): Promise<CompanyInfo | null> => {
  const { data: companyInfo } = await sanityFetch({
    query: COMPANY_INFO_QUERY,
  });
  return companyInfo;
};

export default getCompanyInfo;
