import { Router } from "express";
import { UrlRespository } from "../repositories/UrlRepository";
import { UrlCache } from "../repositories/urlCache";
import { UrlService } from "../services/urlService";
import { UrlController } from "../controllers/urlController";

const UrlRouter = Router();

const urlRepository = new UrlRespository();
const urlCache = new UrlCache();
const urlService = new UrlService(urlRepository, urlCache);
const urlController = new UrlController(urlService);

UrlRouter.get("/:shortUrl", (req, res, next) => {
  console.log("redirect URL request received for:", req.params.shortUrl);
  urlController.redirectUrl(req, res).catch(next);
});
UrlRouter.post("/shorten", (req, res, next) => {
  console.log("shorten URL request received:", req.body);
  urlController.shortenUrl(req, res).catch(next);
});

export default UrlRouter;
