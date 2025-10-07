import React  from "react"
import ReactDOM from "react-dom/client"
import Header from "../src/components/Header"
import Body from "../src/components/Body"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "../src/components/About"
import Error from "../src/components/Error"
import Body from "../src/components/Body"


const AppLayout = () => {
    return <div className="app">
        <Header/>
        <Body/>
    </div>
}

const appRouter = createBrowserRouter([
{
    path: "/",
    element: <AppLayout/>,
    children: [
        {
            path:'/',
            element:<Body/>
        },
        {
            path: "/about",
            element: <About/>
        }
    ],
    errorElement: <Error/>
},
{
    path: "/about",
    element: <About/>
}
])

const root = ReactDOM.createRoot(document.getElementById("root"))

console.log('Root',root)

//root.render(heading)
root.render(<RouterProvider router={appRouter}/>)