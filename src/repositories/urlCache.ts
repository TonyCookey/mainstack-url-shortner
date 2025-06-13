import Redis from "ioredis";

import { IUrlCache } from "../interfaces/urlCache";

const redis = new Redis();

export class UrlCache implements IUrlCache {
  async get(shortUrl: string): Promise<string | null> {
    console.log("fetching from cache:", shortUrl);

    return await redis.get(shortUrl);
  }

  async set(shortUrl: string, longUrl: string): Promise<void> {
    console.log("setting cache for:", shortUrl, "with long URL:", longUrl);
    await redis.set(shortUrl, longUrl, "EX", 60 * 60 * 24);
  }
}
