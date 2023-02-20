import { Resolver, Query } from '@nestjs/graphql';
import { ScrapeType } from 'src/libs/dto/scrape';
import { ScrapeService } from 'src/scraping/domain/scrape.service';

@Resolver()
export class ScrapingResolver {
  constructor(private scrapeService: ScrapeService) {}
  @Query(() => [ScrapeType])
  async srapeData(): Promise<ScrapeType[]> {
    const data = await this.scrapeService.scrape();
    return data;
  }
}
