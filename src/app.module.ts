import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConversationsModule } from './modules/conversations/conversations.module';
import { MessagesModule } from './modules/messages/messages.module';
import { DatabaseModule } from './core/database/database.module';
import { GraphQLModule } from './core/graphql/graphql.module';
import { SecurityModule } from './core/security/security.module';
import { HealthModule } from './modules/health/health.module';

@Module({
    imports: [
        // Security modules
        SecurityModule,

        // Core modules
        DatabaseModule,
        GraphQLModule,

        // Application modules
        HealthModule,
        UsersModule,
        AuthModule,
        ConversationsModule,
        MessagesModule,
    ]
})

export class AppModule { }
