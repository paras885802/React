import React  from "react"
import ReactDOM from "react-dom/client"

// React elemet
// const heading = React.createElement("h1",{id: "heading", xy: "XYZ"},"First react program")

// React elemet like this
// <div id="parent">
//     <div id="child">
//         <h1>I'm H1 Tag</h1>
//         <h1>I'm H2 Tag</h1>
//     </div>
// </div>
// const parent = React.createElement("div", {id:"parent"}, React.createElement("div", {id: "child"}, [React.createElement("h1", {},"I'm H1 Tag"), React.createElement("h2", {},"I'm H2 Tag")]))


//JSX
const heading = (<h1 id="New_ID" className="Classy" tabIndex="1">Hello Through JSX</h1>);

//Class Component 
//Functional Component: Normal JS Function(A function who return a JSX is a functional component)

//Functional Component 1:
const Heading1 = () => (<h1 id="New_ID" className="Classy" tabIndex="1">Hello Through JSX</h1>);

//Functional Component 2:
const FunctionalComponent = () => {
return <div id="Functonal_Composition">
    <Heading1/>
    <h1>Through Functional Component</h1>
</div>
}


console.log('1',FunctionalComponent)
console.log('2',FunctionalComponent())

const root = ReactDOM.createRoot(document.getElementById("root"))

console.log('Root',root)

//root.render(heading)
root.render(<FunctionalComponent/>)