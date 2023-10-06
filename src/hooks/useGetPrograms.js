import { db } from "../firebase/config";
import { collection, getDocs, addDoc, query, where, orderBy, startAt, endAt } from "firebase/firestore/lite";
import { useState } from "react";

const useGetPrograms = () => {
  const [listPrograms, setlistPrograms] = useState([]);
  const [loadingPrograms, setLoadingPrograms] = useState(false);
  const [initialData, setInitialData] = useState([]);

  const getDataPrograms = async () => {
    setLoadingPrograms(true);
    const programsCol = collection(db, "programs");
    try {
      const q = query(programsCol, orderBy("Aplicativo", "asc"));
      const programsSnapshot = await getDocs(q);
      const list = programsSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setlistPrograms(list);
      setInitialData(list);
    } catch (e) {
      console.log("Se ha generado una exepcion", e);
    } finally {
      setLoadingPrograms(false);
    }
  };

  const getFilterData = async (valueColumn, valueData) => {
    try {
      setLoadingPrograms(true);
      const programsRef = collection(db, "programs");
      const q = query(programsRef, where(valueColumn, "==", valueData));
      const querySnapshot = await getDocs(q);
      const list = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setlistPrograms(list);
    } catch (e) {
      console.log("Se ha generado una exepcion", e);
    } finally {
      setLoadingPrograms(false);
    }
  };

  const getSearchData = async (listData, valueSearch, filterType) => {
    const filter = valueSearch.toLowerCase();
    try {
      setLoadingPrograms(true);
      const data = filterType === "All"
        ? listData.filter((e) => e.Descripcion.toLowerCase().includes(filter))
        : listData.filter((e) => e.Descripcion.toLowerCase().includes(filter) && e.Tipo.includes(filterType));
      setlistPrograms(data);
    } catch (e) {
      console.log("Se ha generado una exepcion", e);
    } finally {
      setLoadingPrograms(false);
    }
  };

  const getStartData = async (valueData) => {
    try {
      setLoadingPrograms(true);
      const programsRef = collection(db, "programs");
      const q = query(programsRef, orderBy("Descripcion"), startAt(valueData), endAt(valueData + "\uf8ff"));
      const querySnapshot = await getDocs(q);
      const list = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setlistPrograms(list);
    } catch (e) {
      console.log("Se ha generado una exepcion", e);
    } finally {
      setLoadingPrograms(false);
    }
  };

  const addDataFireBase = async (Aplicativo, Programa, Tipo, Descripcion) => {
    try {
      const docRef = await addDoc(collection(db, "programs"), {
        Programa,
        Aplicativo,
        Descripcion,
        Tipo,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      throw new Error("Se ha generado una excepcion", e);
    }
  };
  return {
    getDataPrograms,
    getFilterData,
    addDataFireBase,
    getStartData,
    getSearchData,
    listPrograms,
    initialData,
    loadingPrograms,
  };
};

export default useGetPrograms;
