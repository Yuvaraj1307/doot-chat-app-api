import { Module } from '@nestjs/common';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { GRAPHQL_PLAYGROUND, GRAPHQL_SCHEMA_DEST } from '@/common/constants/app.constants';

@Module({
  imports: [
    NestGraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), GRAPHQL_SCHEMA_DEST),
      sortSchema: true,
      playground: GRAPHQL_PLAYGROUND,
      subscriptions: {
        'graphql-ws': true,
      },
      context: ({ req, connection }: any) => {
        if (connection) {
          return { req: connection.context };
        }
        return { req };
      }
    }),
  ],
})
export class GraphQLModule { }
