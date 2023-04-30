import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Profile() {
  const [users, setUsers] = useState({});

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/users?username=john`);
      console.log(res.data);
      setUsers(res.data);
    };
    fetchPost();
  }, []);
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF}post/3.jpeg`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={`${PF}person/7.jpeg`}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{users.username}</h4>
              <span className="profileInfoDesc">{users.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="john" />
            <Rightbar user={users} />
          </div>
        </div>
      </div>
    </>
  );
}
