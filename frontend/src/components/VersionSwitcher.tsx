import { NavLink } from "react-router-dom";

const VersionSwitcher = () => {
  return (
    <div className="version-switcher">
      <span className="span">Version:</span>
      {["1", "2", "3", "4", "5", "6", "7"].map((v) => (
        <NavLink className={'link'} key={v} to={`/${v}`}>
          {v}
        </NavLink>
      ))}
    </div>
  );
};

export default VersionSwitcher;
