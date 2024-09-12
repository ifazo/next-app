import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

type IReview = {
  id: string;
  rating: number;
  review: string;
  user: string;
  name: string;
  email: string;
  image: string;
  service: string;
  createdAt: string;
  updatedAt: string;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Reviews({ data }: { data: IReview[] }) {
  // console.log(data)
  return (
    <div className="my-10 bg-white">
      <div>
        <h2 className="">Customer Reviews</h2>

        <div className="-my-4">
          {data?.map((review, reviewIdx) => (
            <div
              key={review.id}
              className="flex space-x-4 text-sm text-gray-500"
            >
              <div className="flex-none py-10">
                <Image
                  height={40}
                  width={40}
                  src={review.image || ""}
                  alt="review"
                  className="h-10 w-10 rounded-full bg-gray-100"
                />
              </div>
              <div
                className={classNames(
                  reviewIdx === 0 ? "" : "border-t border-gray-200",
                  "flex-1 py-10",
                )}
              >
                <h3 className="font-medium text-gray-900">
                  {review.name || ""}
                </h3>

                <div className="mt-4 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        review.rating > rating
                          ? "text-yellow-400"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0",
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{review.rating} out of 5 stars</p>

                <div className="prose prose-sm mt-4 max-w-none text-gray-500">
                  {review.review}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
