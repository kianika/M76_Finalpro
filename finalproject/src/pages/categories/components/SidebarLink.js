import { CategoryLink } from "../../../styles/sidebar";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

function SidebarLink({ text, id }) {
  return (
    <>
   
      <CategoryLink to={""}>
        <h3>{text}</h3>
      </CategoryLink>
      <Divider orientation="horizontal" flexItem />
   
    </>
  );
}
export default SidebarLink;
