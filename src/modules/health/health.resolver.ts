import { Resolver, Query } from '@nestjs/graphql';
import { HealthService } from './health.service';
import { HealthStatus } from './dto/health.dto';

@Resolver()
export class HealthResolver {
  constructor(private readonly healthService: HealthService) { }

  @Query(() => HealthStatus)
  async healthCheck() {
    const result = await this.healthService.check();
    return result;
  }
}
