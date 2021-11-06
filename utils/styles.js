import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
      textDecoration: "none",
    },
  },
  container: {
    minHeight: "80vh",
  },
  header: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  flexGrow: {
    flexGrow: 1,
  },
});

export default useStyles;
