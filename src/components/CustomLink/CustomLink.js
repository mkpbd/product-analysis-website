import { useMatch, useResolvedPath,Link,LinkProps } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ color: match ? "red" : "black" , borderBottom: match ? "2px solid red": "2px solid #ddd"}}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {/* {match && " (active)"} */}
      </div>
    );
  }

  export default CustomLink;