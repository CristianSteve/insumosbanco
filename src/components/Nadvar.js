import React from "react";
import isWeekend from "date-fns/isWeekend";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { ArrowRightIcon } from "@mui/x-date-pickers";

const Panel = styled.div`
  background-color: var(--second-color);
  border-radius: 0px 0px 0px 20px;
  color: #fff;
  display: grid;
  grid-template-rows: auto;
`;
const ContentCalendar = styled.div`
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  background-color: var(--primary-color);
  color: initial;
  display: flex;
  align-items: center;
  justify-items: center;
  @media (max-width: 800px) {
    display: none;
  }
`;
/*
const LabelAvatar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  column-gap: 1rem;
  align-items: center;
  margin: 10px;
`;*/

const Nadvar = () => {
  const [value, setValue] = React.useState(new Date());

  return (
    <Panel>
      <ContentCalendar>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            orientation="portrait"
            openTo="day"
            value={value}
            rightArrowIcon={ArrowRightIcon}
            shouldDisableDate={isWeekend}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            showToolbar={false}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </ContentCalendar>
    </Panel>
  );
};

export default Nadvar;
