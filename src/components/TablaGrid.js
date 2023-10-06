import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridDeleteIcon } from "@mui/x-data-grid";
import Alertas from "../components/Alertas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faFileEdit, faPen, faUpload } from "@fortawesome/free-solid-svg-icons";

/*renderCell : () => <FontAwesomeIcon icon={faPen}/>*/

const TablaGrid = ({ rows = [], loading }) => {
  
const deleteUser = ()=> {alert("asd")}
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
    headerName: "Descripción",
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
  {
    field: "actions",
    headerName: "actions",
    editable: false,
    headerClassName: 'super-app-theme--header',
    align : "center",
    getActions: (params) => [
      <GridActionsCellItem
      icon={<GridDeleteIcon />}
        label="Delete"
        onClick={deleteUser(params.Aplicativo)}
        showInMenu
      />]
  },
];

  const [show, setShow] = useState(false);
  const [messageCopy, setMessageCopy] = useState("");
  const handleCopy = (text)=> {
    navigator.clipboard
    .writeText(text)
    .then(() => {
      setMessageCopy("Se ha copiado el texto con exito!");
    })
    .catch(() => {
      setMessageCopy("Ocurrio un error al copiar el text");
    });
  }
  return (
    <>
      <Box sx={{ height: 350, width: "100%", marginTop: 2, '& .super-app-theme--header': {
          backgroundColor: 'var(--second-color)', color : 'var(--color-text)', borderColor : 'var(--second-color)'}}}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoPageSize={false}
          paginationMode="client"
          pageSizeOptions={[4, 8, 100]}
          disableSelectionOnClick={true}
          /* checkboxSelection */
          loading={loading}
          onCellDoubleClick={(params, event) => {
            const text = params.formattedValue;
            handleCopy(text)
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
