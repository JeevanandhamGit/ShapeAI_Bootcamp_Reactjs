import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Note2 from  "./Note2";
import Note3 from "./Note3";
function App() {
  return (
    <div>
      <h1>
        {" "}
        <Header />
        <Note />
        <Note2 />
        <Note3 />
        <Footer />
      </h1>
    </div>
  );
}
export default App;
