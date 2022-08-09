import { db } from "../firebase/config";
import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
} from "firebase/firestore/lite";
import { useState } from "react";

const useServiceTipos = () => {
  const [listTipos, setlistTipos] = useState([]);

  const getDatatipos = async () => {
    const tiposCol = collection(db, "tipos");
    try {
      const tiposSnapshot = await getDocs(tiposCol);
      const list = tiposSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      console.log(list)
      setlistTipos(list);
    } catch (e) {
      console.log("Se ha generado una exepcion", e);
    }
  };

  const getFilterData = async (valueColumn, valueData) => {
    const collectionRef = collection(db, "tipos");
    const q = query(collectionRef, where(valueColumn, "==", valueData))

    const querySnapshot = await getDocs(q);
    querySnapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    });
    /*     const q = query(
          collectionRef,
          orderBy(valueColumn),
          startAt(valueData),
          endAt(valueData + "\uf8ff")
        ); */
  };

  const addDataFireBase = async (valor) => {
    try {
      const docRef = await addDoc(collection(db, "tipos"), {
        valor,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      throw new Error("Se ha generado una excepcion", e);
    }
  };
  return { getDatatipos, getFilterData, addDataFireBase, listTipos };
};

export default useServiceTipos;
