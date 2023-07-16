import { useLocalStorage } from 'usehooks-ts';
import { products, Product } from 'utils/data.ts';

interface SavedItem {
  product_id: number;
  quantity: number;
}

const useCart = () => {
  const [cartItems, setCartItems] = useLocalStorage<SavedItem[]>('cart', []);

  const cartItemProducts = cartItems.map(cartItem => {
    return {
      product: products.find<Product>(
        (product: Product) => cartItem.product_id === product.product_id
      ),
      quantity: cartItem.quantity,
    };
  });

  const addItem = (product_id: number) => {
    const item = cartItems.find(
      (cartItem: SavedItem) => cartItem.product_id === product_id
    );

    // if existing, add quantity
    if (item) {
      const filteredCartItems = cartItems.filter(
        (cartItem: SavedItem) => cartItem.product_id !== product_id
      );
      setCartItems([
        ...filteredCartItems,
        { product_id, quantity: ++item.quantity },
      ]);
      return;
    }

    setCartItems([...cartItems, { product_id, quantity: 1 }]);
  };

  const removeItem = (product_id: number) => {
    const filteredCartItems = cartItems.filter(
      (cartItem: SavedItem) => cartItem.product_id !== product_id
    );
    setCartItems(filteredCartItems);
  };

  const subtotal = cartItemProducts.reduce(item => {
    if (item) {
      return item.product.price * item.quantity;
    }
    return 0;
  }, 0);

  return {
    items: cartItemProducts,
    addItem,
    removeItem,
    subtotal,
  };
};

export default useCart;
