import { Module } from '@nestjs/common';
import { HealthService } from './health.service';
import { HealthResolver } from './health.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { PubSub } from 'graphql-subscriptions';
import { PUB_SUB } from '@/common/constants/app.constants';
import { User, UserSchema } from '../users/schemas/user.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    providers: [
        HealthService,
        HealthResolver,
        {
            provide: PUB_SUB,
            useValue: new PubSub(),
        },
    ],
})
export class HealthModule { }
