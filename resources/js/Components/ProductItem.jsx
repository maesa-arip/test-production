import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { numberFormat } from "@/Libs/helper";

export default function ProductItem({ product }) {
    return (
        <div>
            <Link href={`/toko/products/${product.slug}`}>
                <img
                    className="w-full rounded-lg"
                    src={product.picture}
                    alt=""
                />
            </Link>
            <div className="mt-4">
                <Link className="text-sm block mb-2 line-clamp-1" href={`/toko/products/${product.slug}`}>
                    {product.name}
                </Link>
                <div className="flex items-center justify-between text-sm">
                    <Link href={`/toko/products?category=${product.category.slug}`}>
                        {product.category.name}
                    </Link>
                    <div>
                        Rp {numberFormat(product.price)}
                    </div>
                </div>
            </div>
        </div>
    );
}
