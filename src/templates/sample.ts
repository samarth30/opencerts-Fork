import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface CustomTemplateCertificate extends Document {
  name: string;
  institute: string;
  foo?: {
    title: string;
  };
}

export const customTemplateCertificate: CustomTemplateCertificate = {
  name: "samarth gugnani",
  institute: "Institute of John Doe",
  $template: {
    name: "COC",
    type: "EMBEDDED_RENDERER",
    url: "https://samarth30icerts.netlify.app/"
  },
  foo: {
    title: "Bar is awesome"
  }
};
