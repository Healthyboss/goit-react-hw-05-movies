import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";
import styles from "./SharedLayout.module.scss"

export const SharedLayout = () => {
    return(
        <div>
            <nav className={styles.navigation}>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/movies">
                    Movies
                </NavLink>
            </nav>
            <Suspense fallback={<div>Loading page...</div>}>
            <Outlet/>
            </Suspense>
        </div> 
    )
}