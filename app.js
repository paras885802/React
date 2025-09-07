

// <div id="parent">
//     <div id="child">
//         <h1>I'm H1 Tag</h1>
//         <h1>I'm H2 Tag</h1>
//     </div>
// </div>


// const heading = React.createElement("h1",{id: "heading", xy: "XYZ"},"First react program")

const parent = React.createElement("div", {id:"parent"}, React.createElement("div", {id: "child"}, [React.createElement("h1", {},"I'm H1 Tag"), React.createElement("h2", {},"I'm H2 Tag")]))

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"))

console.log('Root',root)

root.render(parent)