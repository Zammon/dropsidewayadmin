import React, { useEffect, useState } from "react";
import Settimedelay from "../Uses/SetDelay";
import "./Table.css";
export default function Table({ sx, headers = [], items = [], loadings }) {
  const [minWidth, setMinWidth] = useState();
  const [statusLoading, setStatusLoading] = useState(true);
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < headers.length; i++) {
      sum = sum + headers[i].width;
    }
    setMinWidth(sum);
  }, [headers]);

  // useEffect(()=>{
  //     if(loadings){
  //        setStatusLoading(true);
  //     }  setStatusLoading(false);
  // },[loadings])

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
      <div className="area-items-tables" style={{ ...sx, minWidth: minWidth }}>
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
