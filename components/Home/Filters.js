import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import { WrapperFilter } from "./HomePage.styled";

const Filters = ({
  orderDesc,
  selectedOrder,
  platforms,
  selectedPlatform,
  handleChangeOrder,
  handleChangePlatform,
}) => {
  const options = [
    {
      value: "rating",
      label: `По рейтингу ${orderDesc ? "(возрастание)" : "(убывание)"}`,
      className: selectedOrder.value.includes("rating")
        ? `chevron ${orderDesc ? "" : "chevron-down"}`
        : "",
    },
    {
      value: "released",
      label: `По дате релиза игры ${
        orderDesc ? "(возрастание)" : "(убывание)"
      }`,
      className: selectedOrder.value.includes("released")
        ? `chevron ${orderDesc ? "" : "chevron-down"}`
        : "",
    },
  ];

  platforms = platforms.map((platform) => {
    return { value: platform.id, label: platform.name };
  });
  platforms.unshift({ value: "All", label: "Все" });

  return (
    <WrapperFilter>
      <Dropdown
        options={options}
        onChange={handleChangeOrder}
        value={selectedOrder}
        placeholder="Выберите"
        className="dropdown"
        controlClassName="sort-dropdown"
        menuClassName="dropdown-menu"
      />

      <Dropdown
        options={platforms}
        onChange={handleChangePlatform}
        value={selectedPlatform}
        placeholder="Платформы"
        className="dropdown"
        controlClassName="platform-dropdown"
        menuClassName="dropdown-menu"
      />
    </WrapperFilter>
  );
};

export default Filters;
