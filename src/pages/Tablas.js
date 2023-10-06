import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Alertas from "../components/Alertas";
import { useForm } from "../hooks/useForm";
import useGetPrograms from "../hooks/useGetPrograms";
import useServiceTipos from "../hooks/useServiceTipos";

const Tablas = ({hide}) => {
  const [tipo, setTipo] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState({ status: "", msg: "" });

  const { addDataFireBase } = useGetPrograms();
  const { getDatatipos, listTipos } = useServiceTipos();

  const [values, handleInputChange, resetInput] = useForm({
    aplicativo: "",
    componente: "",
    descripcion: "",
  });
  const { aplicativo, componente, descripcion } = values;

  useEffect(() => {
    getDatatipos();
    // eslint-disable-next-line
  }, [])
  
  const handleCreateItem = () => {
    try {
      if (!aplicativo || !componente || !descripcion || !tipo) {
        setMessageAlert({
          status: "error",
          msg: `Datos incompletos, verificar de nuevo!`,
        });
        setShowAlert((e) => !e);
        return;
      }
      const descripcionFormat = descripcion.toUpperCase().charAt(0) + descripcion.toLowerCase().slice(1, descripcion.length);
      const componenteFormat = componente.toUpperCase();
      const aplicativoFormat = aplicativo.toUpperCase();
      addDataFireBase(aplicativoFormat, componenteFormat, tipo, descripcionFormat);
      setMessageAlert({
        status: "success",
        msg: `Se ha creado con exito el componente ${componente}`,
      });
      resetInput();
      setShowAlert((e) => !e);
    } catch (e) {
      setMessageAlert({
        status: "error",
        msg: `Se ha generado un error al crear el componente`,
      });
    }
  };

  return (
    <React.Fragment>
      <Grid container spacing={3} style={{ height: "100%" }}>
        <Grid item xs={12} md={12} sm={12} justifyContent={"center"} container>
          <h3>Adicionar nuevo componente</h3>
        </Grid>
        <Grid item xs={12} md={4} sm={12}>
          <TextField
            label="Aplicativo"
            variant="filled"
            fullWidth
            style={{ margin: 0 }}
            name="aplicativo"
            value={aplicativo}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={8} sm={12}>
          <TextField
            label="Componente"
            variant="filled"
            fullWidth
            name="componente"
            value={componente}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Autocomplete 
            disablePortal
            id="combo-box-demo"
            options={listTipos.map(t => t.valor)}
            onInputChange={(event, newValue) => {
              setTipo(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Tipo"
                variant="filled"
                name={"tipo"}
                value={tipo}
                onChange={handleInputChange}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            label="Descripcion"
            variant="filled"
            fullWidth
            name="descripcion"
            value={descripcion}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <Button variant="outlined" size="large" onClick={()=>hide(false)}>
              Cancelar
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" size="large" onClick={handleCreateItem}>
              Guardar
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Alertas
        message={messageAlert.msg}
        bottom={"90%"}
        show={showAlert}
        hidden={setShowAlert}
        status={messageAlert.status}
        position="fixed"
      />
    </React.Fragment>
  );
};

export default Tablas;
