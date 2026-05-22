import React from "react";
import useCartInfo from "@/hooks/use-cart-info";

const FREE_SHIPPING_THRESHOLD = 570;

const RenderCartProgress = () => {
  const { total } = useCartInfo();
  const progress = Math.min(100, (total / FREE_SHIPPING_THRESHOLD) * 100);
  const isEligible = total >= FREE_SHIPPING_THRESHOLD;
  const remaining = FREE_SHIPPING_THRESHOLD - total;

  return (
    <div className="scs-cart-drawer__shipping">
      <p className="scs-cart-drawer__shipping-text">
        {isEligible ? (
          "You are eligible for free shipping."
        ) : (
          <>
            Add <strong>₹{remaining.toFixed(2)}</strong> more for free shipping
          </>
        )}
      </p>
      <div
        className={`scs-cart-drawer__progress${isEligible ? " is-complete" : ""}`}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="scs-cart-drawer__progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default RenderCartProgress;
