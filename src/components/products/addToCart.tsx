"use client";

import { Product } from "@/types/products";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cartSlice";

interface Props {
  product: Product;
}

export default function AddToCartButton({
  product,
}: Props) {

  const dispatch = useAppDispatch();

  const handleClick = () => {

    dispatch(
      addToCart({
        product,
        quantity: 1,
      })
    );

  };

  return (
    <button
  onClick={handleClick}
  className="mt-6 rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
>
  Add To Cart
</button>
  );
}