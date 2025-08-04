import { NavLink, Outlet } from "react-router";

export function App() {
    return (
        <div className="w-100vw h-100vh flex flex-col">
            <header className="h-17.5 flex items-center justify-center">
                <NavLink to="/hooks">常用hooks</NavLink>
                &emsp;
                <NavLink to="/controlled-and-uncontrolled">受控和非受控</NavLink>
                &emsp;
                <NavLink to="/calendar">calendar</NavLink>
                &emsp;
                <NavLink to="/donghua">动画</NavLink>
                &emsp;
                <NavLink to="/gesture">手势库</NavLink>
                &emsp;
                <NavLink to="/styled-components">styled-components</NavLink>
            </header>
            <main className="flex-1 outline-solid outline-1 outline-red-500 -outline-offset-4 p-3">
                <Outlet />
            </main>
        </div>
    )
}