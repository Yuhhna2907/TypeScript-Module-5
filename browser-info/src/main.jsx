import React from "react";
import ReactDOM from "react-dom/client";

function BrowserInfo() {
    return <h3>Browser's details: {navigator.userAgent}</h3>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserInfo />
);