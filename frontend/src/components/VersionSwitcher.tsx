import { NavLink } from "react-router-dom";

const VersionSwitcher = () => {
  return (
    <div className="version-switcher">
      <span className="span">Version:</span>
      {["v1", "v2", "v3", "v4", "v5"].map((v) => (
        <NavLink className={'link'} key={v} to={`/${v}`}>
          {v}
        </NavLink>
      ))}
    </div>
  );
};

export default VersionSwitcher;
