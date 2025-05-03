import { type SchemaTypeDefinition } from "sanity";
import { packageType } from "./package";
import { portfolioItemType } from "./portfolioItem";
import { serviceType } from "./service";
import { testimonialType } from "./testamonial";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [packageType, portfolioItemType, serviceType, testimonialType],
};
