import React from "react";
import { Badge, Button, ButtonGroup } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const AddDeleteButton = ({ itemCount, setItemCount }) => {
  return (
    <div>
      <ButtonGroup
        className={"flex justify-center"}
        fullWidth
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button
          onClick={() => {
            setItemCount(Math.max(itemCount - 1, 0));
          }}
        >
          {" "}
          <RemoveIcon fontSize="small" />
        </Button>
        <Button>{itemCount}</Button>
        <Button
          onClick={() => {
            setItemCount(itemCount + 1);
          }}
        >
          {" "}
          <AddIcon fontSize="small" />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default AddDeleteButton;
