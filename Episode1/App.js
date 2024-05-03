
// let newheading=React.createElement("h1",{id:"head"},"Namaste React")
// let newroot=ReactDOM.createRoot(document.getElementById("root"));
// newroot.render(newheading);

const parent =React.createElement("div",{},
React.createElement("div",{id:"parent"},
[React.createElement("h1",{class:"heading1"},"I am h1 tag"),React.createElement("h2",{class:"heading2"},"I am h2 tag")]));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);