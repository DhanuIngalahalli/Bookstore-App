import React from "react";
import "./Orderplaced.css";
import { Button } from "@mui/material";
import Header from "../../Components/Header/Header";
import orderplaced from "../../Assets/orderplaced.jpeg";



function Orderplaced() {
    return (
      
        <>
      <div>
          <Header />
        <div className="mainContent">
          <img className="image" src={orderplaced}  />
          <div>
            <p className="message">
              Hurray!!! Your order is confirmed! The order id is ( #123456 ).
              Save the order id for further communication.
            </p>
          </div>
          <div className="table">
            <table className="order-table">
              <tr>
                <th className="email">Email Us</th>
                <th>Contact Us</th>
                <th>Address</th>
              </tr>
              <tr>
                <td className="email">admin@bookstore.com</td>
                <td>+91 8163475881</td>
                <td>
                  42, 14 main 15th Cross, Sector 4, opp to BDA complex near
                  Kamarakom restaurent HSR layout Banglore 560034
                </td>
              </tr>
            </table>
          </div>
          <Button
            style={{
              marginTop: "50px",
              padding: "10px 60px",
              marginBottom: "50px",
            }}
            variant="contained"
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </>
  );
}



  export default Orderplaced;