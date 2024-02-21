import { IProduct } from '@/types'
import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { Skeleton } from "@/components/ui/skeleton"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductCard({ product }: { product: IProduct }) {

  if (!product) return (<div className="group relative p-4 border-r border-b border-gray-200 sm:p-6">
      <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
        
      </div>
      <div className="pt-2 text-center">
        <h3 className="text-sm font-medium text-gray-900">
          <Link href={`/products/${product._id}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product ? product.title : <Skeleton className="h-4 w-[200px]" />}
          </Link>
        </h3>
        <div className="mt-3 flex flex-col items-center">
          <p className="sr-only">{product.rating} out of 5 stars</p>
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(
                  product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                  'flex-shrink-0 h-5 w-5'
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="mt-1 text-sm text-gray-500">{product.stock} stocks</p>
        </div>
        <p className="mt-4 text-base font-medium text-gray-900">${product.price}</p>
      </div>
    </div>)

  return (
    <div className="group relative p-4 border-r border-b border-gray-200 sm:p-6">
      <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
        <Image
          width={160}
          height={160}
          src={product.thumbnail}
          alt={product.title}
          className="object-center object-cover"
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
                  product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                  'flex-shrink-0 h-5 w-5'
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="mt-1 text-sm text-gray-500">{product.stock} stocks</p>
        </div>
        <p className="mt-4 text-base font-medium text-gray-900">${product.price}</p>
      </div>
    </div>
  )
}
