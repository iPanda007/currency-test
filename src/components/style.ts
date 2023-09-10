import { css } from "@stitches/core";

export const headerStyle = css({
  fontWeight: "bold",
  fontSize: "20px",
  padding: "12px",
  background: "#fff",
  display: "flex",
  boxShadow:"0 0 6px -1px #00000010",
  justifyContent: "center",
  '& > div' : {
    display : "flex",
    flexDirection:"column",
    alignItems:"center"
  } ,
  "& img": {
    marginBottom: "-29px",
    textAlign:"center"
  },
});
