import ServiceFilter from "@/components/ServiceFilter";
import ServiceList from "@/components/ServiceList";

export default async function page() {
  const res = await fetch(`http://localhost:3000/api/services`, {
    cache: "no-store",
  });
  const services = await res.json();
  console.log(services);
  return (
    <div>
      <ServiceFilter />
      <ServiceList services={services} />
    </div>
  );
}
