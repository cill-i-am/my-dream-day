import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CardContent } from "@/components/ui/card"
import { MagicCard } from '@/components/magicui/magic-card'
import getTestamonials from '@/sanity/queries/get-testamonials'

export default async function Home() {
  const testamonials = await getTestamonials();

  return (
    <div className="container mx-auto px-6 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Dream Day.ie</h1>
        <p className="text-xl mb-8">Wedding & Event Hire Décor</p>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          We are passionate about planning and decorating your dream day. We specialise in Church Décor, Civil Ceremony
          Décor and Venue décor.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
          <p className="mb-4 text-muted-foreground">
            We have an eye for detail. Our background is in Fresh Flowers. Over the last 20 years we have worked with so
            many couples over the years making their dream day a reality.
          </p>
          <p className="text-muted-foreground">We are a Limerick based company but we travel Nationwide.</p>
        </div>
        <div>
          <Image src="/placeholder.svg" alt="Wedding Décor" width={500} height={300} className="rounded-lg shadow-md" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">What Our Clients Say</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto"
        >
          <CarouselContent>
            {testamonials.map((testamonial) => (
              <CarouselItem key={testamonial.order}>
                <MagicCard className="rounded">
                  <CardContent className="p-6">
                    <p className="mb-4 italic text-muted-foreground">&quot;{testamonial.content}&quot;</p>
                    <p className="text-right font-semibold">- {testamonial.name}</p>
                  </CardContent>
                </MagicCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <p className="mb-4 text-muted-foreground">
          All of our Packages are reasonably priced to suit any budget. We use the highest quality flowers and décor to
          make your dream day a real life Pinterest Moment.
        </p>
        <Button asChild>
          <Link href="/contact">Contact Us Today</Link>
        </Button>
      </section>
    </div>
  )
}

