import { Resolver, Query } from '@nestjs/graphql';
import { HealthService } from './health.service';

@Resolver()
export class HealthResolver {
  constructor(private readonly healthService: HealthService) {}

  @Query(() => String)
  async healthCheck(): Promise<string> {
    const result = await this.healthService.check();
    return `Status: ${result.status} | DB: ${result.db} | PubSub: ${result.pubSub} | Timestamp: ${result.timestamp}`;
  }
}
