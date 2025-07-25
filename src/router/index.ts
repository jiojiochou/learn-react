import { createBrowserRouter, redirect } from "react-router";
import { App } from "../pages";
import { Hooks } from "../pages/常用hooks";
import { ControlledAndUncontrolled } from "../pages/controlled-and-uncontrolled";
import { Calendar } from "../pages/Calendar";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                element: null,
                loader: () => redirect("/hooks")
            },
            {
                path: "/hooks",
                Component: Hooks
            },
            {
                path: "/controlled-and-uncontrolled",
                Component: ControlledAndUncontrolled
            },
            {
                path: "/calendar",
                Component: Calendar
            }
        ]
    }
])