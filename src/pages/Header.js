import React from "react";
import { Stack, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"end"}
        alignItems={"center"}
        spacing={3}
        sx={{ minHeight: "70px", bgcolor: "lightblue", px: 2 }}
      >
        {/* Use onClick to call the navigate function directly */}
        {location.pathname !== "/" && (
          <Button variant="outlined" onClick={() => navigate("/")}>
            Home
          </Button>
        )}
        {location.pathname !== "/client" && (
          <Button variant="outlined" onClick={() => navigate("/client")}>
            Client
          </Button>
        )}
        {location.pathname !== "/customer" && (
          <Button variant="outlined" onClick={() => navigate("/customer")}>
            Customer
          </Button>
        )}
        {location.pathname !== "/products" && (
          <Button variant="outlined" onClick={() => navigate("/products")}>
            Products
          </Button>
        )}
        {location.pathname !== "/orders" && (
          <Button variant="outlined" onClick={() => navigate("/orders")}>
            Orders
          </Button>
        )}
        {location.pathname !== "/deliveries" && (
          <Button variant="outlined" onClick={() => navigate("/deliveries")}>
            Deliveries
          </Button>
        )}
      </Stack>
    </>
  );
};

export default Header;
