import { Outlet } from "react-router-dom";
import { Nav } from "../../components/Navbar";

export const PageContainer = () => {
  return (
    <>
      <section className="container-fluid" id="pageContainer">
        <Nav />
        <div className="container">
          <Outlet />
        </div>
      </section>
    </>
  )
}