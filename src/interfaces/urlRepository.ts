import { UrlDocument } from "../models/urlModel.schema";

export interface IUrlRepository {
  createUrl(longUrl: string, shortUrl: string): Promise<UrlDocument>;
  findByShortUrl(shortUrl: string): Promise<UrlDocument | null>;
}
