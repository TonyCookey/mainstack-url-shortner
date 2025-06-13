import { Request, Response } from "express";
import { UrlService } from "../services/urlService";

export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  shortenUrl = async (req: Request, res: Response) => {
    const { longUrl } = req.body;

    const shortUrl = await this.urlService.shortenUrl(longUrl);

    return res.status(201).json({
      shortUrl: `${req.protocol}://${req.get("host")}/${shortUrl}`,
    });
  };

  redirectUrl = async (req: Request, res: Response) => {
    const { shortUrl } = req.params;

    const longUrl = await this.urlService.getLongUrl(shortUrl);
    if (longUrl) {
      console.log("Redirecting to...", longUrl);

      return res.redirect(longUrl);
    }
    return res.status(404).json({ error: "URL not found" });
  };
}
