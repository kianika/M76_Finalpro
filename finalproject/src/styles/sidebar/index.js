import styled from "@emotion/styled"
import { Colors } from "../theme"


export const Link = styled("div")({
    
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        cursor: "pointer",
        borderRadius: "10px",
        color: Colors.primary,
     
      "&:hover" :{
        backgroundColor: Colors.light_gray,
        color: Colors.secondary,
        transition: "color 100ms ease-out"
      },
     
      h2:{
        fontWeight: "700",
        fontSize: "20px",
        marginRight: "20px"
      }
    }
    )

    

    export const Dropdowncontent = styled("div")({
    
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        cursor: "pointer",
        borderRadius: "10px",
        color: Colors.dim_grey,
     
      "&:hover" :{
        backgroundColor: Colors.light_gray,
        color: Colors.secondary,
        transition: "color 100ms ease-out"
      },
     
      h2:{
        fontWeight: "700",
        fontSize: "20px",
        marginRight: "20px"
      }
    }
    )
