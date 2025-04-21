const BASE_URL = "https://checkpoint-ecommerce-backend.onrender.com";

export async function fetchAllProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("Erreur lors du chargement des produits");
  return await res.json();
}

export async function fetchProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error("Produit introuvable");
  return await res.json();
}
