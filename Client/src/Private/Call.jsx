import axios from "axios";
import { useEffect, useState } from "react";
import Api from "./Api";
import Blog from "../Components/Blog";
import React from "react";

function Call() {
  const [profile, setProfile] = useState({
    name: "Sanskar Tyagi",
    profileImage: "",
    profileUrl: "",
  });
  const [Blogs, setBlog] = useState({
    item: [],
    isLoading: true,
    error: null,
  });

  const getData = () => {
    axios
      .get(Api)
      .then((info) => {
        const image = info.data.feed.image;
        const link = info.data.feed.link;
        const blogs = info.data.items;
        setProfile((p) => ({ ...p, profileImage: image, profileUrl: link }));
        setBlog({ item: blogs, isLoading: false });
      })
      .catch((err) => setBlog({ error: err.message }));
  };
  useEffect(() => {
    getData();
  }, [axios]);
  return <Blog data={Blogs} profile={profile}></Blog>;
}

export default Call;
