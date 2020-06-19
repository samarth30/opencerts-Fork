import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface CustomTemplateCertificate extends Document {
  name: string;
  recipient: {
    name: string;
  };
  foo?: {
    title: string;
  };
}

export const customTemplateCertificate: CustomTemplateCertificate = {
  name: "OpenAttestation Tutorial Certificate of Completion",
  recipient: {
    name: "samarth"
  },
  $template: {
    name: "COC",
    type: "EMBEDDED_RENDERER",
    url: "https://www.havefruit.com/"
  },
  foo: {
    title: "Bar is awesome"
  }
};
