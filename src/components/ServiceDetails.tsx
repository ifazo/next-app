"use client";
import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import toast from "react-hot-toast";
import { useState } from "react";
import { useAppSelector } from "@/store/hook";
// import ReviewModal from './ReviewModal'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type IService = {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
  category: string;
  startDate: string;
  endDate: string;
};

export default function ServiceDetails({ data: service }: { data: IService }) {
  // console.log(service)
  const { user } = useAppSelector((state) => state.user);
  const { token } = user as { token: string };
  const [open, setOpen] = useState(false);

  const handleOrder = async (service: IService) => {
    await fetch(`${process.env.BASE_URL}/api/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        services: [service],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!!data.success) {
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  };

  const handleWishlist = async (service: IService) => {
    await fetch(`${process.env.BASE_URL}/api/wishlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ service: service }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!!data.success) {
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="bg-white">
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        {/* Image gallery */}
        <div className="aspect-h-1 aspect-w-1 w-full">
          <Image
            layout="fill"
            src={service.image}
            alt={service.name}
            className="h-full w-full object-cover object-center sm:rounded-lg"
          />
        </div>
        {/* Product info */}
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            {service.name}
          </h1>

          <div className="mt-3">
            <h2 className="sr-only">Service information</h2>
            <p className="text-xl font-medium text-gray-900">
              ${service.price}
            </p>
          </div>
          {/* Reviews */}
          {/* <div className="mt-3">
                        <h3 className="sr-only">Reviews</h3>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                {[ 0, 1, 2, 3, 4 ].map((rating) => (
                                    <StarIcon
                                        key={rating}
                                        className={classNames(
                                            product.rating > rating ? 'text-indigo-500' : 'text-gray-300',
                                            'h-5 w-5 flex-shrink-0'
                                        )}
                                        aria-hidden="true"
                                    />
                                ))}
                            </div>
                            <p className="sr-only">{product.rating} out of 5 stars</p>
                        </div>
                    </div> */}
          <div className="mt-6">
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6 text-base text-gray-700">
              <p>{service.description}</p>
            </div>
          </div>
          <div className="mt-6">
            <div className="sm:flex-col1 mt-3 flex">
              <button
                type="button"
                onClick={() => handleOrder(service)}
                className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
              >
                Book Now
              </button>
              <button
                type="button"
                onClick={() => handleWishlist(service)}
                className="bg-gray ml-4 flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
              >
                <HeartIcon
                  className="h-6 w-6 flex-shrink-0"
                  aria-hidden="true"
                />
                <p className="ml-2">Wishlist</p>
              </button>
            </div>
            <div className="mt-3">
              <h3 className="m-3 text-center text-base font-medium text-gray-900">
                Share your thoughts
              </h3>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
              >
                Write a review
              </button>
              {/* <ReviewModal open={open} setOpen={setOpen} id={service.id} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
