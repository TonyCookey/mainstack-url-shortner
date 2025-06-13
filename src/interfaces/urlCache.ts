export interface IUrlCache {
  get(shortUrl: string): Promise<string | null>;
  set(shortUrl: string, longUrl: string): Promise<void>;
}
