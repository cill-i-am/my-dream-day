"use client";

import { MagicCard } from "@/components/magicui/magic-card";
import { CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PortfolioItem } from "../../../sanity.types";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity/lib/client";

const PortfolioItemCard = ({ item }: { item: PortfolioItem }) => {
  const imageProps = useNextSanityImage(client, item.image!);

  return (
    <MagicCard className='rounded'>
      <CardContent className="p-0">
        <div className="relative aspect-[16/9]">
          <Image
            src={imageProps.src}
            loader={imageProps.loader}
            alt={item.title || "Portfolio Item"}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold">{item.title}</h3>
        </div>
      </CardContent>
    </MagicCard>
  );
};

export { PortfolioItemCard };
