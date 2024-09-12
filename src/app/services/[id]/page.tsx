import Reviews from "@/components/Reviews";
import ServiceDetails from "@/components/ServiceDetails";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const res = await fetch(`http://localhost:3000/api/services/${id}`, {
    cache: "no-store",
  });
  const service = await res.json();
  // console.log(service)

  const response = await fetch(`http://localhost:3000/api/reviews/${id}`, {
    cache: "no-store",
  });
  const reviews = await response.json();
  // console.log(reviews)

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <ServiceDetails data={service.data} />
      <Reviews data={reviews.data} />
    </div>
  );
}
