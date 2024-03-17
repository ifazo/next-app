import { Service } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function ServiceList({ services }: { services: Service[] }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <Image
                  width={300}
                  height={300}
                  src={service.thumbnail}
                  alt={service.title}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <Link href={`/services/${service.id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {service.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500">{service.description}</p>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-sm italic text-gray-500">
                    {service.status}
                  </p>
                  <p className="text-base font-medium text-gray-900">
                    {service.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
