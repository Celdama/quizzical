import { Buffer } from 'buffer';

export const decodeText = (str) => {
  return Buffer.from(str, 'base64').toString();
};
