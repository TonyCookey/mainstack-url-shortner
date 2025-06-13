import randomstring from "randomstring";

export default function generateRandomString(): string {
  return randomstring.generate({
    length: 7,
    charset: "alphabetic",
  });
}
