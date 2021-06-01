import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import RouterView from "@/shared/router";
import BreadCrumb from "./components/breadcrumb";
import routes from "./config/routes";
import { setTitle, setSubTitle } from "./store/slice/navSlice";
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";
import "./style.scss";
const Dashboard = (props: any) => {
  console.log('dashbaord props',props);
  const dispatch = useDispatch();
  useEffect(() => {
    if (props?.location?.state?.title) {
      dispatch(setTitle(props?.location?.state?.title));
    }

    if (props?.location?.state?.subtitle) {
      dispatch(setSubTitle(props?.location?.state?.subtitle));
    }
  }, [props?.location]);

  return (
    <>
      <section id="dashboard-layout">
        <header>
          <Header />
        </header>
        <nav>
          <Nav />
        </nav>
        <main>
          <BreadCrumb />
          <Suspense fallback={<></>}>
            <RouterView routes={routes}></RouterView>
          </Suspense>
        </main>
        <footer>
          <Footer />
        </footer>
      </section>
    </>
  );
};
export default Dashboard;
