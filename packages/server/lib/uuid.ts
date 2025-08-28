import type { BufferSource } from "bun";
import type { Buffer } from "node:buffer";
import { randomUUIDv5, randomUUIDv7 } from "bun";

export function uuidv7(
/**
 * @default "hex"
 */
  encoding?: "hex" | "base64" | "base64url",
/**
 * @default Date.now()
 */
  timestamp?: number | Date,
): string;

export function uuidv7(
  encoding: "buffer",
/**
 * @default Date.now()
 */
  timestamp?: number | Date,
): Buffer;

export function uuidv7(
  encoding?: "hex" | "base64" | "base64url" | "buffer",
  timestamp?: number | Date,
): string | Buffer {
  if (encoding === "buffer") return randomUUIDv7(encoding, timestamp);
  return randomUUIDv7(encoding, timestamp);
}

export function uuidv5(
  name: string | BufferSource,
  namespace: string | BufferSource | "dns" | "url" | "oid" | "x500",
/**
 * @default "hex"
 */
  encoding?: "hex" | "base64" | "base64url",
): string;

export function uuidv5(
  name: string | BufferSource,
  namespace: string | BufferSource | "dns" | "url" | "oid" | "x500",
  encoding: "buffer",
): Buffer;

export function uuidv5(
  name: string | BufferSource,
  namespace: string | BufferSource | "dns" | "url" | "oid" | "x500",
  encoding?: "buffer" | "hex" | "base64" | "base64url",
) {
  if (encoding === "buffer") return randomUUIDv5(name, namespace, encoding);
  return randomUUIDv5(name, namespace, encoding);
}
