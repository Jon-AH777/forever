import { toast } from "react-toastify";
import { products } from "@/assets/frontend_assets/assets";
import { atom, useAtom } from "jotai";
import { usePathname } from "next/navigation";

const showSearchAtom = atom(false);
const searchAtom = atom("");
const cartAtom = atom({});
const useShop = () => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useAtom(searchAtom);
  const [showSearch, setShowSearch] = useAtom(showSearchAtom);
  const [cartItems, setCartItems] = useAtom(cartAtom);
  const pathname = usePathname();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }

    /*  let cartData = structuredClone
      ? structuredClone(cartItems)
      : JSON.parse(JSON.stringify(cartItems)); */
    let cartData = JSON.parse(JSON.stringify(cartItems));
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
    console.log("cart items:", cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          totalCount += cartItems[items][item];
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone
      ? structuredClone(cartItems)
      : JSON.parse(JSON.stringify(cartItems));
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          totalAmount += itemInfo.price * cartItems[items][item];
        }
      }
    }
    return totalAmount;
  };

  return {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    pathname,
  };
};

export default useShop;
