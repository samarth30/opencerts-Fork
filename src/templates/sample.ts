import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface CustomTemplateCertificate extends Document {
  name: string;
  recipient: {
    name: string;
  };
}

export const customTemplateCertificate: CustomTemplateCertificate = {
  name: "blockchain",
  recipient: {
    name: "samarth"
  },
  $template: {
    name: "COC",
    type: "EMBEDDED_RENDERER",
    url: "https://www.havefruit.com/"
  }
};
