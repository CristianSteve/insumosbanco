import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Alertas from "../components/Alertas";

const columns = [
  {
    field: "Programa",
    headerName: "Programa",
    flex: 1.2,
    editable: false,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: "Descripcion",
    headerName: "Descripcion",
    flex: 4,
    editable: false,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: "Aplicativo",
    headerName: "Aplicativo",
    flex: 1,
    editable: false,
    headerClassName: 'super-app-theme--header',
  },
];

const TablaGrid = ({ rows = [], loading }) => {
  const [show, setShow] = useState(false);
  const [messageCopy, setMessageCopy] = useState("");
  return (
    <>
      <Box sx={{ height: 330, width: "100%", marginTop: 3, '& .super-app-theme--header': {
          backgroundColor: 'var(--second-color)', color : 'var(--color-text)', borderColor : 'var(--second-color)'}}}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={4}
          disableSelectionOnClick={true}
          /* checkboxSelection */
          loading={loading}
          onCellDoubleClick={(params, event) => {
            const text = params.formattedValue;
            navigator.clipboard
              .writeText(text)
              .then(() => {
                setMessageCopy("Se ha copiado el texto con exito!");
              })
              .catch(() => {
                setMessageCopy("Ocurrio un error al copiar el text");
              });
            setShow(true);
          }}
        />
      </Box>
      <Alertas  
        message={messageCopy}
        position={"fixed"}
        show={show}
        hidden={setShow}
        left="1rem"
        bottom="1rem"
      />
    </>
  );
};

export default TablaGrid;
