export const formatDate = (date) => {
  const monthNames = [
    "",
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Нояябрь",
    "Декабрь",
  ];

  const [year, month, day] = date.split("-");

  return `${monthNames[parseInt(month)]} ${day}, ${year}`;
};
