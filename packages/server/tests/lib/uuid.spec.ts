import { Buffer } from "node:buffer";
import { uuidv5, uuidv7 } from "#/uuid";
import { expect, test } from "bun:test";

test("Generate an v7 UUID String", () => {
  expect(uuidv7()).toBeString();
  expect(uuidv7("base64")).toBeString();
  expect(uuidv7("base64url")).toBeString();
});

test("Generate an v7 UUID Buffer", () => {
  expect(uuidv7("buffer")).toBeInstanceOf(Buffer);
});

test("Generate an v5 UUID String", () => {
  expect(uuidv5("test", "dns")).toBeString();
  expect(uuidv5("test", "url", "base64")).toBeString();
  expect(uuidv5("test", "oid", "base64url")).toBeString();
});

test("Generate an v5 UUID Buffer", () => {
  expect(uuidv5("test", "dns", "buffer")).toBeInstanceOf(Buffer);
});
