import { Injectable } from '@nestjs/common';
import { ScrapeRepository } from '../infrastructure/repositories/scrape.repository';
import { ScrappedData } from '../infrastructure/schemas/scrape.schema';

@Injectable()
export class ScrapeService {
  constructor(private readonly scrapeRepository: ScrapeRepository) {}
  async scrape(): Promise<ScrappedData[]> {
    //console.log('Calling scrape() method...');
    return await this.scrapeRepository.scrape();
  }
}
