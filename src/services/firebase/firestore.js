import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import db from "../../db/db";

export const getProducts = async (categoria) => {

  const productsRef = collection(db, "products");

  const consulta = categoria
    ? query(
        productsRef,
        where("category", "==", categoria)
      )
    : productsRef;

  const response = await getDocs(consulta);

  return response.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const getProductById = async (itemId) => {

  const productRef = doc(db, "products", itemId);

  const response = await getDoc(productRef);

  return {
    id: response.id,
    ...response.data()
  };
};
