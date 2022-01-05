import React from "react";
import Cards from "../../Components/Cards/Cards";
import Header from "../../Components/Header/Header";
import './Home.css'



function Home() {

  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="Container">
          <div className="title">
            <h4>
              Books<span style={{ color: "black" }}>(128 items)</span>
            </h4>
          </div>
        </div>
     </div>
     <Cards />
    </div>
  );
}
export default Home;