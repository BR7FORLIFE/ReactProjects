export const Categories = async () => {
  const res = await fetch("http://localhost:3000/categories");
  return await res.json();
};
