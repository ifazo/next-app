import { IProduct } from "@/types";
import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductCard({ product }: { product: IProduct }) {
  if (!product) return <div>Product not found</div>;
  return (
    <div className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
        <Image
          width={160}
          height={160}
          src={product.thumbnail}
          alt={product.title}
          className="object-cover object-center"
        />
      </div>
      <div className="pt-2 text-center">
        <h3 className="text-sm font-medium text-gray-900">
          <Link href={`/products/${product._id}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.title}
          </Link>
        </h3>
        <div className="mt-3 flex flex-col items-center">
          <p className="sr-only">{product.rating} out of 5 stars</p>
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(
                  product.rating > rating ? "text-yellow-400" : "text-gray-200",
                  "h-5 w-5 flex-shrink-0",
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="mt-1 text-sm text-gray-500">{product.stock} stocks</p>
        </div>
        <p className="mt-4 text-base font-medium text-gray-900">
          ${product.price}
        </p>
      </div>
    </div>
  );
}
