import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/products/addToCart";
import { products } from "@/temp-data/products/products";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const ProductDetailsPage = async ({ params }: Props) => {
  const { id } = await params;

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-[#D8E6EE] pb-50">

      <div className="mx-auto max-w-7xl px-6">

        <Link
          href="/our_products"
          className="mb-10 inline-block text-cyan-600 hover:underline"
        >
          ← Back to Products
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Image */}

          <div className="flex h-[500px] items-center justify-center rounded-[35px] bg-slate-100 shadow-xl">

            {/* Replace later */}

            <span className="text-slate-400">
              Product Image
            </span>

            {/*
            <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-[35px]"
            />
            */}

          </div>

          {/* Details */}

          <div>

            <p className="font-semibold uppercase tracking-wider text-cyan-600">
              {product.category}
            </p>

            <h1 className="mt-3 text-5xl font-bold text-slate-900">
              {product.name}
            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-700">
              {product.description}
            </p>
            <p className="mt-8 text-xl font-bold leading-8 text-slate-700">
              {` $ ${product.price}`}
            </p>
            <AddToCartButton product={product} />

          </div>

        </div>

      </div>

    </main>
  );
};

export default ProductDetailsPage;