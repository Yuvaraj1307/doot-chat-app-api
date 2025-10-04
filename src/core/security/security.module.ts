import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { RATE_LIMIT_MAX, RATE_LIMIT_TTL } from '@/common/constants/app.constants';

@Module({
    imports: [
        // Throttler setup using constants
        ThrottlerModule.forRoot({
            throttlers: [
                {
                    ttl: RATE_LIMIT_TTL,
                    limit: RATE_LIMIT_MAX
                }
            ]
        }),
    ],
})

export class SecurityModule {}
