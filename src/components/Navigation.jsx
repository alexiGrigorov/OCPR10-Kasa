import { Children, cloneElement } from "react";
import { NavLink } from "react-router-dom";

function Navigation({
  children,
  ulClassName = "",
  linkClassName = "",
  activeClassName = "",
  inactiveClassName = "",
  ...rest
}) {
  return (
    <nav {...rest}>
      <ul className={ulClassName}>
        {Children.map(children, (child) => {
          const newProps =
            child.type === NavLink
              ? {
                  className: ({ isActive }) =>
                    `${linkClassName} ${isActive ? activeClassName : inactiveClassName}`.trim(),
                }
              : { className: linkClassName };

          return <li>{cloneElement(child, newProps)}</li>;
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
