import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CustomTemplateCertificate } from "../sample";
import { PrintWatermark } from "../../core/PrintWatermark";
import logo from "./aaa.jpeg";

const containerStyle = css`
  background-: #324353;
  color: #ffffff;
  padding: 15px;
  margin: auto;
  width: 100%;
  height: 100%;
  text-align: center;
`;
// css={containerStyle}
export const CustomTemplate: FunctionComponent<TemplateProps<CustomTemplateCertificate> & { className?: string }> = ({
  document,
  className = ""
}) => {
  return (
    <div className="Container mr-100">
      {/* <PrintWatermark />
      <h1>{document.name}</h1> */}
      <img src={logo} />
      {/* <div>awarded to</div>
      <h2>{document.recipient.name}</h2> */}
    </div>
  );
};
