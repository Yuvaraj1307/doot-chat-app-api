import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../users/schemas/user.schema';
import { Model } from 'mongoose';
import { PUB_SUB } from '@/common/constants/app.constants';
import { PubSub } from 'graphql-subscriptions';
import { HealthStatus } from './dto/health.dto';

@Injectable()
export class HealthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        @Inject(PUB_SUB) private readonly pubSub: PubSub,
    ) { }
    async check(): Promise<HealthStatus> {
        const dbStatus = await this.checkDB();
        const pubSubStatus = this.checkPubSub();
        return {
            status: 'ok',
            db: dbStatus,
            pubSub: pubSubStatus,
            timestamp: new Date().toISOString(),
        };
    }

    private async checkDB(): Promise<'ok' | 'error'> {
        try {
            await this.userModel.estimatedDocumentCount(); // simple DB check
            return 'ok';
        } catch (err) {
            return 'error';
        }
    }

    private checkPubSub(): 'ok' | 'error' {
        // PubSub is in-memory, always ready unless app crashes
        return this.pubSub ? 'ok' : 'error';
    }
}
