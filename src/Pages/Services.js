import React, { useEffect } from "react";
import { Size } from "components/Display/media-query";
import { Routes } from "components/Routes";
import { RenderHeader } from "components/Display/PageHeader";
import { PageFooter } from "components/Display/PageFooter";
import { ServicesSub } from "./SubPages/ServicesSub";

export const Services = ({ topBarOn }) => {
  var size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className="block"
      style={{
        width: topBarOn
          ? isResponsiveSize
            ? "calc(100vw)"
            : "calc(100vw - 200px)"
          : isResponsiveSize
          ? "calc(100vw)"
          : "calc(100vw)",
      }}
    >
      <div
        style={{
          zIndex: 2,
          width: "100%",
     
        }}
      >
        <ServicesSub />
      </div>
      <div
        style={{
          zIndex: 3,
          width: "100%",
        }}
      >
        <PageFooter />
      </div>
    </div>
  );
};
