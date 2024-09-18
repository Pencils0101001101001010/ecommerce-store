"use client";

import { ShoppingBag } from "lucide-react";

import Button from "@/components/ui/button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  //? 1.isMounted starts as false and gets set to true once the component is mounted on the client.
  //? 2.Nothing is rendered while isMounted is false, preventing SSR and hydration mismatches.
  //? 3.This pattern is useful when working with browser APIs (like localStorage) that don't exist during server-side rendering.
  //* using the useCart hook here
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  const router = useRouter();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-2 font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
