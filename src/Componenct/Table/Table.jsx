import React, { useEffect, useRef, useState } from "react";
import "./Table.css";
export default function Table({ sx, headers = [], items = [], loadings, setRef }) {
  const [minWidth, setMinWidth] = useState();
  const tableRef = useRef(null);
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < headers.length; i++) {
      sum = sum + headers[i].width;
    }
    setMinWidth(sum);
  }, [headers]);

  useEffect(()=>{
    if(!setRef) return;
    setRef(tableRef);
  },[])

  return (
    <div className="container-tables">
      <div className="area-header-tables" style={{ minWidth: minWidth }}>
        {headers?.map((data, index) => {
          return (
            <div
              className="header-item-tables"
              key={index}
              style={{
                display: data.display ? "flex" : "none",
                justifyContent: data.center ? "center" : "",
                alignItems: "center",
                minWidth: data.width + data.headerMargin,
              }}
            >
              {data.title}
            </div>
          );
        })}
      </div>
      <div ref={tableRef} className="area-items-tables" style={{ ...sx, minWidth: minWidth }}>
        {loadings ? (
          <div
            className="area-loading-tables"
            style={{ maxWidth: minWidth, ...sx }}
          >
            Loading...
          </div>
        ) : items.length !== 0 ? (
          items
        ) : (
          <div className="none-item" style={{ ...sx, maxWidth: minWidth }}>
            ไม่มีข้อมูล
          </div>
        )}
      </div>
    </div>
  );
}
