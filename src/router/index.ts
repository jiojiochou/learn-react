import { createBrowserRouter, redirect } from "react-router";
import { App } from "../pages";
import { Hooks } from "../pages/常用hooks";
import { ControlledAndUncontrolled } from "../pages/controlled-and-uncontrolled";
import { Calendar } from "../pages/Calendar";
import { Donghua } from "../pages/动画";
import { Gesture } from "../pages/gesture";
import { StyledComponent } from "../pages/styled-components";

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
            },
            {
                path: "/donghua",
                Component: Donghua
            },
            {
                path: "/gesture",
                Component: Gesture
            },
            {
                path: "/styled-components",
                Component: StyledComponent
            }
        ]
    }
])