export const filterItems = (items,filter) => {
  const string = filter.toLowerCase();
  return items.filter((item) => {
    return item.text.toLowerCase().indexOf(string) !== -1;
  });
};
