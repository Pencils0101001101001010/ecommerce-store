"use client";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="p-4" />
      <div className="flex flex-col gap-y-6">
        <h3 className="font-semibold text-black">Size:</h3>
        <div>{data?.size?.value}</div>
        <h3 className="font-semibold text-black">Color:</h3>
        <div
          className="h-6 w-6 border border-grey-600"
          style={{ backgroundColor: data?.color?.value }}
        />
      </div>
      <div className="mt-10 items-center gap-x-3">
        <Button className="flex items-center gap-x-2">
          Add to cart
          <ShoppingCart size={20} className="ml-1 text-gray-600" />
        </Button>
      </div>
    </div>
  );
};

export default Info;
