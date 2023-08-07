import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Autocomplete,
  Button,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import { ContainerStyled } from "../Global/Components";
import Icon from "../icons/Icon";

export const MUI = () => {
  const [value, setValue] = useState("0");
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];
  return (
    <ContainerStyled>
      <Button component={NavLink} to="/dashboard/Gifs" variant="contained">
        Go TO Gifs
      </Button>
      <br />
      <br />
      <br />
      <Autocomplete
        onChange={(event, option) => {
          setValue(option.year);
        }}
        value={value}
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderOption={(props, option) => {
          return (
            <div {...props} key={option.label}>
              {option.year}
            </div>
          );
        }}
        loading={true}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
      <br />
      <p>year : {value}</p>

      <br />
      <br />
      <br />
      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" size="large">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" size="large">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Stack>
      <br />
      <br />
      <br />
      <Icon />
    </ContainerStyled>
  );
};
