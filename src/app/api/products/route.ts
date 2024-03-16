import { createProduct, getProducts } from "@/data/product";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const q = searchParams.get("q") || "";
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = parseInt(searchParams.get("skip") || "0");
    const sort = searchParams.get("sort") || "asc";
    const category = searchParams.get("category") || "";
    const price = parseInt(searchParams.get("price") || "0");
    const rating = parseInt(searchParams.get("rating") || "0");

    const data = await getProducts({
      q,
      skip,
      limit,
      sort,
      category,
      price,
      rating,
    });
    return new Response(JSON.stringify(data), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      headers: { "content-type": "application/json" },
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await createProduct(body);
    return new Response(JSON.stringify(data), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      headers: { "content-type": "application/json" },
    });
  }
}
