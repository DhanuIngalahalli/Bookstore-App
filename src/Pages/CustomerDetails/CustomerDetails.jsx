import React from 'react'
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import "./CustomerDetails.css";
import UserService from "../../Service/UserService";

const userService = new UserService();


function CustomerDetails(props) {
  const [customer, setCustomerdata] = React.useState([]);
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [type, setType] = React.useState("");

  const takeState = (event) => setState(event.target.value);
  const takeAddress = (event) => setAddress(event.target.value);
  const takeCity = (event) => setCity(event.target.value);
  const takeValue = (event) => setType(event.target.value);

  let customerDetails = {
    addressType: type,
    fullAddress: address,
    city: city,
    state: state,
  };

  const uploadCustomerdata = () => {
    userService
      .getCartItems(
        "https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items"
      )
      .then((response) => {
        console.log(response, "data received");
        setCustomerdata(response.data.result[0].user_id);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

 
  const CustomerDetailsEdit = () => {
    userService.CustomerDetailsEdit("https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user",customerDetails)
      .then((response) => {
        console.log("updated address ", response);
      })
      .catch((err) => {
        console.warn(err);
      });
  };


  React.useEffect(() => {
    uploadCustomerdata();
  }, []);

  return (
    <div className="customer-details-OuterContainer">
      <div className="customer-details-title">
        <p>Customer details</p>
        <div className="add-new-address">
          <p>Add new Address</p>
        </div>
      </div>

      <div className="inputfields-container">
        <div className="first-row-field">
          <TextField
            className="fullname"
            id="outlined-basic"
            defaultValue=""
            size="small"
            value={customer.fullName}
            helperText="Full Name"
          />
          <TextField
            className="mobilenum"
            id="outlined-basic"
            defaultValue=""
            size="small"
            value={customer.phone}
            helperText="Mobile Number"
          />
        </div>
        <div className="sec-row-field">
          <TextareaAutosize
            aria-label="minimum height"
            minRows={5}
            placeholder="Address"
            className="address"
            onChange={takeAddress}
          />
        </div>
        <div className="third-row-field">
          <TextField
            label="City/Town"
            id="outlined-basic"
            defaultValue=""
            size="small"
            className="city"
            onChange={takeCity}
          />
          <TextField
            className="state"
            label="State"
            id="outlined-basic"
            defaultValue=""
            size="small"
            onChange={takeState}
          />
        </div>
      </div>

      <div className="customerContinueBtn">
        <div className="continue-button" onClick={CustomerDetailsEdit}>
          <p onClick={() => props.continueOrder(true)}>CONTINUE</p>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails
