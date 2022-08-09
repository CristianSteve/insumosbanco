import React, { useEffect, useState } from "react";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { Fab } from "@mui/material";
//import { Search } from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RadioButton from "../components/RadioButton";
import useGetPrograms from "../hooks/useGetPrograms";
import styled from "styled-components";
import TablaGrid from "../components/TablaGrid";
import PopUpEmpty from "../components/PopUpEmpty/PopUpEmpty";
import Tablas from "./Tablas";
import useServiceTipos from "../hooks/useServiceTipos";

const ContainerMain = styled.div`
  position: relative;
  height: 100%;
`;

const HeadMain = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-around;
`;

const Programs = () => {
  const { getDataPrograms, getFilterData, listPrograms, loadingPrograms } = useGetPrograms();
  const { getDatatipos, listTipos } = useServiceTipos();
  const [addItem, setAddItem] = useState(false);
  const [valueRadio, setValueRadio] = useState();

  useEffect(() => {
    getDataPrograms();
    getDatatipos();
    // eslint-disable-next-line
  }, []);
  
  useEffect(()=>{
    console.log("entro", valueRadio)
    if(valueRadio)
      getFilterData("Tipo", valueRadio)
      // eslint-disable-next-line
  },[valueRadio])

  return (
    <ContainerMain>
      <HeadMain>
        {/* <Search placeholder={"Busqueda notas BBVA"} name={"programs"} /> */}
        <RadioButton valueRadio={setValueRadio}
          items={listTipos.map(({valor}) => ({value: valor, label: valor}))}
        />
      </HeadMain>
      <TablaGrid rows={listPrograms} loading={loadingPrograms} />
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "absolute", bottom: 1, right: 1, zIndex: 1 }}
        onClick={() => setAddItem((e) => !e)}
      >
        <FontAwesomeIcon icon={faAdd} />
      </Fab>
      <PopUpEmpty show={addItem} hide={setAddItem} width={"50vw"} height={"60vh"}>
        <Tablas hide={setAddItem}/>
      </PopUpEmpty>
    </ContainerMain>
  );
};

export default Programs;
