import React, { useEffect, useState, useContext } from "react";
import "./ProfileAdmin.css";
import axios from "axios";
import NavProfile from "../NavProfile/NavProfile";
import { SelectsContext } from "../UseContexts/SelectContext";
import Table from "../Table/Table";
import { headersManagePost } from "../Table/header/headerManagePost";
import ItemManagePost from "../Table/Items/ItemManagePost/ItemManagePost";
import SelectFilter, { RefreshButton } from "../SelectFilter/SelectFilter";
import SetDelay from "../Uses/SetDelay";

export default function ProfileAdmin() {
  const [posts, setPosts] = useState();
  const [filters, setFilters] = useState([
    {
      typeValue: "",
      categoryValue: "",
      areaValue: "",
    },
  ]);
  const [loading, setLoading] = useState(true);
  const { selectTypePost, selectTypeArea, selectTypeCategory } =
    useContext(SelectsContext);
  const PostAdmin = async () => {
    const data = await axios.post(
      "https://localhost:7113/api/DropsidewayAdmin/Getlistposttarget",
      {
        idAccout: JSON.parse(localStorage.getItem("userId")),
      }
    );
    setPosts(data);
  };
  function hadleOnClickRefresh() {
    setLoading(true);
    SetDelay(()=>alert("Hello"), 5000);
    PostAdmin();
  };

  useEffect(() => {
    PostAdmin();
  },[]);

  const mapPost =
    posts &&
    posts.data.map((data, index) => {
      return (
        <ItemManagePost
          key={index}
          id={posts && data.idPost}
          image={posts && data.image}
          title={posts && data.title}
          type={posts && data.type}
          categoryItem={posts && data.categoryItem}
          tag={posts && data.tag}
          area={posts && data.areaLost}
          datePost={posts && data.date}
          timePost={posts && data.time}
          status={posts && data.status}
          profile={posts && data.profile}
          firstname={posts && data.firstname}
          lastname={posts && data.lastname}
          header={headersManagePost}
        />
      );
    });

  return (
    <>
      <div className="container-page" style={{ padding: "0" }}>
        <NavProfile
          profile={undefined}
          username={undefined}
          type={undefined}
          createAt={undefined}
          gender={undefined}
          birthday={undefined}
          tel={undefined}
        />
        <button onClick={hadleOnClickRefresh}>Hello</button>
        <div className="container-profileadmin">
          <div className="title-profileadmin">
            {`โพสทั้งหมด(${posts ? posts && posts.data.length : "-"})`}
          </div>
          <div className="description-profileadmin">
            {`โดย`}
            <div className="name-admin-profileadmin">{`Sahahphap Vorasan`}</div>
          </div>
          <div className="filter-profileadmin">
            <div className="filter-label-profileadmin">เมนูจัดการโพสต์:</div>
            <SelectFilter
              label="[กรุณาเลือกประเภทโพสต์]"
              optionObject={
                selectTypePost && selectTypePost.data.nameItemFilter
              }
              filters={(e) => {
                setFilters({ ...filters, typeValue: e });
              }}
            />
            <SelectFilter
              label="[กรุณาเลือกประเภทสิ่งของ]"
              optionObject={
                selectTypeArea && selectTypeArea.data.nameItemFilter
              }
              filters={(e) => {
                setFilters({ ...filters, categoryValue: e });
              }}
            />
            <SelectFilter
              label="[กรุณาเลือกบริเวณหรือพื้นที่ของหาย]"
              optionObject={
                selectTypeCategory && selectTypeCategory.data.nameItemFilter
              }
              filters={(e) => {
                setFilters({ ...filters, areaValue: e });
              }}
            />
            <RefreshButton />
          </div>
          <div className="table-profileadmin">
            <Table
              sx={{ minHeight: 450, maxHeight: 450 }}
              headers={headersManagePost}
              items={mapPost}
              loadings={loading}
            />
          </div>
        </div>
      </div>
    </>
  );
}
