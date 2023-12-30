import React from "react";
import { useDispatch, useSelector } from "react-redux";
type Props = {};

const Home = () => {
  const isLogin = useSelector((state) => state);
  console.log(isLogin);

  return <div>home</div>;
};

export default Home;
