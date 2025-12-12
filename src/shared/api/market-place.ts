import axios, { AxiosInstance } from "axios";

export class MarketPlaceApiClient {
  private instance: AxiosInstance;
  private isRefreshing: boolean = false;

  constructor() {
    this.instance = axios.create({
      baseURL: "https://api.marketplace.com",
      timeout: 5000,
    });
  }

  getInstance(): AxiosInstance {
    return this.instance;
  }
}

export const marketPlaceApiClient = new MarketPlaceApiClient().getInstance();
