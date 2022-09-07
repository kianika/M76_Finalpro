import { Link } from "../../../styles/sidebar"


function SidebarLink({ text }) {
    return(
      <Link>
          <h2>{text}</h2>
      </Link>
    );
  }
  export default SidebarLink;