import React from "react";
import { Grid } from "./components/Material";
import { Header, Body } from "./components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: 1500,
    backgroundColor: "#eeeeee",
    height: "93vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Grid container>
      <Header />
      <Grid container className={classes.contentContainer}>
        <Body />
      </Grid>
    </Grid>
  );
}

export default App;
