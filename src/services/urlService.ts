import { IUrlCache } from "../interfaces/urlCache";
import { IUrlRepository } from "../interfaces/urlRepository";
import generateRandomString from "../utils/generateShortUrl";

export class UrlService {
  constructor(private readonly UrlRepository: IUrlRepository, private readonly UrlCache: IUrlCache) {}

  async shortenUrl(longUrl: string): Promise<string> {
    const shortUrl = generateRandomString();
    await this.UrlRepository.createUrl(longUrl, shortUrl);
    await this.UrlCache.set(shortUrl, longUrl);
    return shortUrl;
  }
  async getLongUrl(shortUrl: string): Promise<string | null> {
    const cachedLongUrl = await this.UrlCache.get(shortUrl);
    if (cachedLongUrl) {
      return cachedLongUrl;
    }

    const urlDocument = await this.UrlRepository.findByShortUrl(shortUrl);
    if (urlDocument) {
      await this.UrlCache.set(shortUrl, urlDocument.longUrl);
      return urlDocument.longUrl;
    }

    return null;
  }
}
