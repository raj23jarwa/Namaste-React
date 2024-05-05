import React from "react"
import ReactDOM from "react-dom/client"
const parent = React.createElement("div", {},
    React.createElement("div", { id: "parent" },
        [React.createElement("h1", { className: "heading1" }, "I am h1 tag 🚀"), React.createElement("h2", { class: "heading2" }, "I am h2 tag")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

const section = React.createElement("h1", { className: "section" }, "Hi i am in love 💕 with React ❤️");
const roott = ReactDOM.createRoot(document.getElementById("roott"));
roott.render(section);


const headingg = <h1 className="heading">Hi i am new heading with JSX 😘👌</h1>
const jsx =ReactDOM.createRoot(document.getElementById("jsx"))
jsx.render(headingg)

const Title =() =>{
    return <h1 className="head"> I am title componenet using JSX🚀</h1>
}
const HeadingComponent = () => {
return(
    <div className="container">
        {/* <Title/> */}
        {/* We can call functional componenet like this as they are function */}
        {Title()}  
        <h1 className="heading"> I am a functional component 😊😎</h1>
    </div>
)
};

jsx.render(<HeadingComponent />);
