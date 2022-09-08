import styled from "@emotion/styled"
import { Colors } from "../theme"


export const CategoryLink = styled("div")({
    
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        cursor: "pointer",
        borderRadius: "10px",
        color: Colors.primary,
     
      "&:hover" :{
        color: Colors.secondary,
        transition: "color 10ms ease-out"
      }
    }
    )

    

    
