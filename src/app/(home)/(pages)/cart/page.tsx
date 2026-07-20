"use client";

import Image from "next/image";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function CartPage() {
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.cart.cart);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen pb-24 bg-[#D8E6EE]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        {cart.length === 0 ? (
          <div className="rounded-[35px] border border-white/40 bg-white/70 p-20 text-center shadow-xl backdrop-blur-xl">
            <h2 className="text-4xl font-bold text-slate-800">
              Your cart is empty
            </h2>

            <p className="mt-4 text-lg text-slate-500">
              Browse our products and add something amazing.
            </p>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
            {/* Products */}

            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex flex-col gap-6 rounded-[32px] border border-white/40 bg-white/70 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] md:flex-row md:items-center"
                >
                  {/* Product */}

                  <div className="flex flex-1 items-center gap-6">
                    <div className="overflow-hidden rounded-3xl bg-slate-100">
                      {item.product.image ? (
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          width={120}
                          height={120}
                          className="h-32 w-32 object-cover transition duration-500 hover:scale-110"
                        />
                      ) : (
                        <div className="flex h-32 w-32 items-center justify-center text-slate-400">
                          No Image
                        </div>
                      )}
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-wider text-cyan-600">
                        {item.product.category}
                      </p>

                      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                        {item.product.name}
                      </h2>
                      <p className="mt-2 text-lg font-semibold text-cyan-700">
                        ₹{item.product.price}
                      </p>

                      <p className="text-sm text-slate-500">
                        Subtotal: ₹{item.product.price * item.quantity}
                      </p>
                    </div>
                  </div>

                  {/* Quantity */}

                  <div className="flex items-center w-30 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
                    <button
                      onClick={() =>
                        dispatch(decreaseQuantity(item.product.id))
                      }
                      className="h-10 w-10 rounded-full text-xl transition hover:bg-cyan-50"
                    >
                      −
                    </button>

                    <span className="w-10 text-center text-lg font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        dispatch(increaseQuantity(item.product.id))
                      }
                      className="h-10 w-10 rounded-full text-xl  transition hover:bg-cyan-50"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove */}

                  <button
                    onClick={() =>
                      dispatch(removeFromCart(item.product.id))
                    }
                    className="rounded-xl border border-red-200 px-5 py-3 font-medium text-red-500 transition hover:bg-red-500 hover:text-white"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}

            <div className="sticky top-24 h-fit rounded-[32px] border border-white/40 bg-white/70 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">
              <h2 className="text-3xl font-bold text-slate-900">
                Cart Summary
              </h2>

              <div className="mt-8 space-y-5">
                <div className="flex justify-between border-b border-slate-200 pb-4">
                  <span className="text-slate-600">
                    Total Items
                  </span>

                  <span className="font-bold text-slate-900">
                    {totalItems}
                  </span>
                  <p >Subtotal: ₹{totalPrice}</p>
                </div>
              </div>

              <button className="mt-10 w-full rounded-2xl bg-green-700 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-95">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}