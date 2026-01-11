import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";
import { ShoppingBag, Minus, Plus, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Button } from "../components/ui/button";

const CartSheet = () => {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleCheckout = () => {
    setOpen(false);
    navigate("/checkout");
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative w-5 h-5"
          aria-label="Cart"
        >
          <ShoppingBag />

          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-md flex flex-col h-full">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl">Your Cart</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center py-12">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="font-body text-muted-foreground mb-4">Your cart is empty</p>
            <Link to="/">
              <Button asChild>Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b border-border">
                  {/* Product Image */}
                  <div className="w-20 h-24 rounded-lg overflow-hidden bg-cream flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <h3 className="font-body font-medium truncate pr-2">{item.name}</h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 hover:bg-secondary rounded transition-colors flex-shrink-0"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    {(item.size || item.color) && (
                      <p className="font-body text-sm text-muted-foreground mt-1">
                        {item.size && `Size: ${item.size}`}
                        {item.size && item.color && " • "}
                        {item.color && `Color: ${item.color}`}
                      </p>
                    )}

                    <p className="font-body font-semibold text-primary mt-1">
                      ₹{item.price.toLocaleString()}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 border border-border rounded hover:bg-secondary transition-colors"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="font-body text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 border border-border rounded hover:bg-secondary transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtotal & Checkout */}
            <div className="border-t border-border pt-4 pb-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-body text-muted-foreground">Subtotal</span>
                <span className="font-display text-xl font-semibold">
                  ₹{totalPrice.toLocaleString()}
                </span>
              </div>
              <p className="font-body text-sm text-muted-foreground">
                Shipping calculated at checkout
              </p>
              <Button className="w-full py-6 text-lg" onClick={handleCheckout}>
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;