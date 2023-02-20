import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ScrappedData } from '../schemas/scrape.schema';
import puppeteer from 'puppeteer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ScrapeRepository {
  constructor(
    @InjectModel(ScrappedData.name)
    private readonly scrapeModel: Model<ScrappedData>,
    private readonly configService: ConfigService,
  ) {}

  async scrape(): Promise<ScrappedData[]> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const siteUrl = this.configService.get<string>('SITE1_URL');
    console.log(siteUrl);
    await page.goto(siteUrl, { timeout: 60000 });
    await page.waitForSelector('img.lazy');

    const imageUrls = await page.$$eval('img.lazy', (images) =>
      images.map((img) => img.getAttribute('data-src')),
    );

    const scrapedData = imageUrls.map((imageUrl) => ({ imageUrl }));

    await browser.close();
    console.log(`Scraped image URLs: ${JSON.stringify(scrapedData)}`);

    return this.scrapeModel.create(scrapedData);
  }
}
