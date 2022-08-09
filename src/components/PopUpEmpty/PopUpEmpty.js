import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";
import React from "react";
import { Pop } from "./StyledPopUp.js";

//import "./StyledPopUp.js";

const PopUpEmpty = ({
  width = "80vw",
  height = "85vh",
  show = false,
  hide,
  children,
}) => {
  return (
    <Pop width={width} height={height}>
      {show && (
        <div className="pop__content">
          <div className="body__pop">
            <span>
              <Tooltip title="Cerrar" placement="right-end" leaveDelay={200}>
                <label onClick={() => hide(false)}>
                  <FontAwesomeIcon icon={faClose} />
                </label>
              </Tooltip>
            </span>
            <div className="body__item">{children}</div>
          </div>
        </div>
      )}
    </Pop>
  );
};

export default PopUpEmpty;
