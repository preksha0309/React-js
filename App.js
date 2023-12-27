// const heading = React.createElement("h1", {},"hello from js!");

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(heading);


// MAKE A REACT CODE FOR THIS 
// {/* <div id = "parent">
//     <div id ="child">
//         <h1> i am h1 tag</h1>
//     </div>
// </div> */}

// react.createelemtn creates an object --> html (browser understand)


const  parent = React.createElement("div",
{id:"parent"},
React.createElement("div",{id:"child"},React.createElement("h1",{},"i am h1 tag"))
);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(parent);


//  what if parents has more than 1 child or how to create siblings --> convert child's part into an array 

// {/* <div id = "parent">
//     <div id ="child">
//         <h1> i am h1 tag</h1>
//         <h2>hiii </h2>
//     </div>
// </div> */}

const  parent1 = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
//array of child if parent has more than 1 child
[React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag")]
)
);

const root1 = ReactDom.createRoot(document.getElementById("root"));
root.render(parent);

// if we have 2 children

{/* <div id = "parent">
    <div id ="child1">
        <h1> i am h1 tag</h1>
        <h2>hiii </h2>
    </div>
      <div id ="child2">
        <h1> i am h1 tag</h1>
        <h2>hiii </h2>
    </div>
</div> */}

const  parent2 = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child1"},
//array of child if parent has more than 1 child
[React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag")]),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag")])
);
// looks ugly ND MESSED and complicated ----> this is why jsx comes into picture 

