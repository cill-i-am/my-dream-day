import { type SchemaTypeDefinition } from "sanity";
import { companyInfoType } from "./companyInfo";
import { packageType } from "./package";
import { portfolioItemType } from "./portfolioItem";
import { serviceType } from "./service";
import { testimonialType } from "./testamonial";
import { teamType } from "./team";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    companyInfoType,
    packageType,
    portfolioItemType,
    serviceType,
    testimonialType,
    teamType,
  ],
};
