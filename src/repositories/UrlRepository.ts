import { generate } from "randomstring";
import { IUrlRepository } from "../interfaces/urlRepository";
import { UrlDocument, Url } from "../models/urlModel.schema";
import generateRandomString from "../utils/generateShortUrl";

export class UrlRespository implements IUrlRepository {
  async createUrl(longUrl: string, shortUrl: string): Promise<UrlDocument> {
    // Check if the shortUrl already exists
    const existingUrl = await this.findByShortUrl(shortUrl);
    if (existingUrl) {
      shortUrl = generateRandomString();
    }
    console.log("Creating URL in repository:", { longUrl, shortUrl });
    return Url.create({ longUrl, shortUrl });
  }
  async findByShortUrl(shortUrl: string): Promise<UrlDocument | null> {
    return await Url.findOne({ shortUrl });
  }
}
