import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { layoutbgcolor } from "./feutures";
import { AboutUs } from "Pages/SubPages/AboutUs";
import { ContactUs } from "Pages/SubPages/ContactUs";

export const PageFooter = () => {
  return (
    <div
      style={{
        backgroundColor: layoutbgcolor,
        paddingBottom: "30pt",
        paddingTop: "30pt",
      }}
      className="grid sm:grid-cols-3 gap-2"
    >
      <AboutUs />
      <div className="flex align-center justify-center">
        <div className="grid grid-cols-4 gap-7 my-auto">
          <InstagramIcon style={{ color: "whitesmoke" }} />
          <FacebookIcon style={{ color: "whitesmoke" }} />
          <LocalPhoneIcon style={{ color: "whitesmoke" }} />
          <WhatsAppIcon style={{ color: "whitesmoke" }} />
        </div>
      </div>
      <ContactUs />
    </div>
  );
};
