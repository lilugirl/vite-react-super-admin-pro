import { Suspense } from "react";
import RouterView from "../../../shared/router";
import routes from "./config/routes";
const User = (props: any) => {
  console.log("user props", props);
  return (
    <div>
      <Suspense fallback={<>loading</>}>
        <RouterView routes={routes}></RouterView>
      </Suspense>
    </div>
  );
};
export default User;
