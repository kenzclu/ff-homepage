import React from "react";

import "./PageHeader.scss";

function PageHeader({ visual, name, rows = [] }) {
  return (
    <div className="page-header">
      {visual}
      <div className="page-header__identity">
        <h1 className="page-header__name">{name}</h1>
        {rows.map(({ label, value }, index) => (
          <div className="page-header__title-row" key={index}>
            <span className="page-header__title-label">{label}</span>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PageHeader;
