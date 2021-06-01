import { useEffect, useState } from "react";
import http from "@/shared/httpclient";
const List = () => {
  const [data, setData] = useState({ hotGoodses: [] });
  useEffect(() => {
    http.get("/api/index-infos").then((res) => {
      console.log("res", res);
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <h2>产品列表</h2>
      <ul>
        热门产品
        {data &&
          data.hotGoodses &&
          data.hotGoodses.length > 0 &&
          data.hotGoodses.map((item: any, index: number) => {
            return <li key={index}>{item.goodsName}</li>;
          })}
      </ul>
    </div>
  );
};
export default List;
