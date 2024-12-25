import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';  
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getHello(): Promise<string> {
    const fact = await this.getRandomCatFact();
    return `Hello Sohel! Here's a random cat fact: ${fact}`;
  }

  private async getRandomCatFact(): Promise<string> {
    try {
      
      const response = await firstValueFrom(this.httpService.get<{ fact: string }>('https://catfact.ninja/fact'));
      return response.data.fact;
    } catch (error) {
      console.error('Error fetching cat fact:', error);
      return 'Sorry, we couldn\'t fetch a cat fact at the moment.';
    }
  }
}
