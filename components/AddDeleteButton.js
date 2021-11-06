import React, { useContext } from "react";
import { Badge, Button, ButtonGroup } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Store } from "../utils/Store";

const AddDeleteButton = ({ itemCount, setItemCount, product }) => {
  const { dispatch } = useContext(Store);
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
            dispatch({
              type: "CART_REMOVE_ITEM",
              payload: { ...product },
            });
          }}
        >
          {" "}
          <RemoveIcon fontSize="small" />
        </Button>
        <Button>{itemCount}</Button>
        <Button
          onClick={() => {
            setItemCount(itemCount + 1);
            dispatch({
              type: "CART_ADD_ITEM",
              payload: { ...product },
            });
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
