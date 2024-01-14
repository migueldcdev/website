import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar"

export const Layout = () => {
    return (
        <>
            <div className="p-3 md:w-2/3 mx-auto h-screen ">
                <div className="sticky top-0">
                    <NavBar />
                </div>
                <div className="">
                    <p className="my-3 text-3xl font-bold">Logo</p>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}