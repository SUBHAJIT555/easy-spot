import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { Filter } from "@/svg";
import NiceSelect from "@/ui/nice-select";
import { handleFilterSidebarOpen } from "@/redux/features/shop-filter-slice";

const ShopTopRight = memo(({ selectHandleFilter }) => {
  const dispatch = useDispatch();

  return (
    <div className="es-shop__toolbar-actions">
      <div className="es-shop__sort">
        <NiceSelect
          options={[
            { value: "Default Sorting", text: "Default Sorting" },
            { value: "Low to High", text: "Low to High" },
            { value: "High to Low", text: "High to Low" },
            { value: "New Added", text: "New Added" },
            { value: "On Sale", text: "On Sale" },
          ]}
          defaultCurrent={0}
          onChange={selectHandleFilter}
          name="Default Sorting"
        />
      </div>
      <button
        type="button"
        onClick={() => dispatch(handleFilterSidebarOpen())}
        className="es-shop__filter-btn"
      >
        <Filter />
        Filter
      </button>
    </div>
  );
});

ShopTopRight.displayName = "ShopTopRight";

export default ShopTopRight;
