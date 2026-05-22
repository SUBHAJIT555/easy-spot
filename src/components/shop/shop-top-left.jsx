import React, { memo } from "react";

const ShopTopLeft = memo(({ total, showing = 0, pageStart = 0 }) => {
  const from = total === 0 ? 0 : pageStart + 1;
  const to = total === 0 ? 0 : pageStart + showing;

  return (
    <p className="es-shop__results">
      Showing <strong>{from}–{to}</strong> of <strong>{total}</strong> results
    </p>
  );
});

ShopTopLeft.displayName = "ShopTopLeft";

export default ShopTopLeft;
