import SidebarLink from "./SidebarLink";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchCategory } from "../../../redux/feature/CategorySlice";



function Sidebar(){


  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return(
    <Box>
     { categories.map(item => (
        <SidebarLink text={item.name} id={item.id} />
        ))} 
        
    </Box>
    



  );
}
export default Sidebar;