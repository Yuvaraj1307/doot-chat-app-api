import { GraphQLResolveInfo } from 'graphql';
import { GraphQLContext } from '../../types/graphql-context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Conversation = {
  __typename?: 'Conversation';
  id: Scalars['ID']['output'];
  participants: Array<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type CreateConversationInput = {
  participants: Array<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserInput = {
  displayName: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type HealthStatus = {
  __typename?: 'HealthStatus';
  db: Scalars['String']['output'];
  pubSub: Scalars['String']['output'];
  status: Scalars['String']['output'];
  timestamp: Scalars['String']['output'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Message = {
  __typename?: 'Message';
  content: Scalars['String']['output'];
  conversationId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  senderId: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createConversation: Conversation;
  login: Scalars['String']['output'];
  sendMessage: Message;
  signUp: User;
};


export type MutationCreateConversationArgs = {
  input: CreateConversationInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationSendMessageArgs = {
  input: SendMessageInput;
  senderId: Scalars['String']['input'];
};


export type MutationSignUpArgs = {
  input: CreateUserInput;
};

export type Query = {
  __typename?: 'Query';
  conversationById: Maybe<Conversation>;
  healthCheck: HealthStatus;
  me: Maybe<User>;
  messagesByConversationId: Array<Message>;
  userByEmail: Maybe<User>;
  userConversations: Array<Conversation>;
};


export type QueryConversationByIdArgs = {
  conversationId: Scalars['String']['input'];
};


export type QueryMeArgs = {
  id: Scalars['String']['input'];
};


export type QueryMessagesByConversationIdArgs = {
  conversationId: Scalars['String']['input'];
};


export type QueryUserByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryUserConversationsArgs = {
  userId: Scalars['String']['input'];
};

export type SendMessageInput = {
  content: Scalars['String']['input'];
  conversationId: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  messageSent: Message;
};


export type SubscriptionMessageSentArgs = {
  conversationId: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  displayName: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: string };

export type CreateConversationMutationVariables = Exact<{
  input: CreateConversationInput;
}>;


export type CreateConversationMutation = { __typename?: 'Mutation', createConversation: { __typename?: 'Conversation', id: string, title: string | null, participants: Array<string> } };

export type UserConversationsQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type UserConversationsQuery = { __typename?: 'Query', userConversations: Array<{ __typename?: 'Conversation', id: string, title: string | null, participants: Array<string> }> };

export type ConversationByIdQueryVariables = Exact<{
  conversationId: Scalars['String']['input'];
}>;


export type ConversationByIdQuery = { __typename?: 'Query', conversationById: { __typename?: 'Conversation', id: string, title: string | null, participants: Array<string> } | null };

export type HealthCheckQueryVariables = Exact<{ [key: string]: never; }>;


export type HealthCheckQuery = { __typename?: 'Query', healthCheck: { __typename?: 'HealthStatus', status: string, db: string, pubSub: string, timestamp: string } };

export type SendMessageMutationVariables = Exact<{
  input: SendMessageInput;
  senderId: Scalars['String']['input'];
}>;


export type SendMessageMutation = { __typename?: 'Mutation', sendMessage: { __typename?: 'Message', id: string, conversationId: string, senderId: string, content: string } };

export type MessagesByConversationIdQueryVariables = Exact<{
  conversationId: Scalars['String']['input'];
}>;


export type MessagesByConversationIdQuery = { __typename?: 'Query', messagesByConversationId: Array<{ __typename?: 'Message', id: string, conversationId: string, senderId: string, content: string }> };

export type MessageSentSubscriptionVariables = Exact<{
  conversationId: Scalars['String']['input'];
}>;


export type MessageSentSubscription = { __typename?: 'Subscription', messageSent: { __typename?: 'Message', id: string, conversationId: string, senderId: string, content: string } };

export type SignUpMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'User', id: string, displayName: string | null, email: string } };

export type MeQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, displayName: string | null, email: string } | null };

export type UserByEmailQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type UserByEmailQuery = { __typename?: 'Query', userByEmail: { __typename?: 'User', id: string, displayName: string | null, email: string } | null };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;





/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Conversation: ResolverTypeWrapper<Conversation>;
  CreateConversationInput: CreateConversationInput;
  CreateUserInput: CreateUserInput;
  HealthStatus: ResolverTypeWrapper<HealthStatus>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  LoginInput: LoginInput;
  Message: ResolverTypeWrapper<Message>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  SendMessageInput: SendMessageInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<Record<PropertyKey, never>>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Conversation: Conversation;
  CreateConversationInput: CreateConversationInput;
  CreateUserInput: CreateUserInput;
  HealthStatus: HealthStatus;
  ID: Scalars['ID']['output'];
  LoginInput: LoginInput;
  Message: Message;
  Mutation: Record<PropertyKey, never>;
  Query: Record<PropertyKey, never>;
  SendMessageInput: SendMessageInput;
  String: Scalars['String']['output'];
  Subscription: Record<PropertyKey, never>;
  User: User;
};

export type ConversationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Conversation'] = ResolversParentTypes['Conversation']> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  participants: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type HealthStatusResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['HealthStatus'] = ResolversParentTypes['HealthStatus']> = {
  db: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pubSub: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MessageResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  content: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  conversationId: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  senderId: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createConversation: Resolver<ResolversTypes['Conversation'], ParentType, ContextType, RequireFields<MutationCreateConversationArgs, 'input'>>;
  login: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  sendMessage: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationSendMessageArgs, 'input' | 'senderId'>>;
  signUp: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationSignUpArgs, 'input'>>;
};

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  conversationById: Resolver<Maybe<ResolversTypes['Conversation']>, ParentType, ContextType, RequireFields<QueryConversationByIdArgs, 'conversationId'>>;
  healthCheck: Resolver<ResolversTypes['HealthStatus'], ParentType, ContextType>;
  me: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryMeArgs, 'id'>>;
  messagesByConversationId: Resolver<Array<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<QueryMessagesByConversationIdArgs, 'conversationId'>>;
  userByEmail: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByEmailArgs, 'email'>>;
  userConversations: Resolver<Array<ResolversTypes['Conversation']>, ParentType, ContextType, RequireFields<QueryUserConversationsArgs, 'userId'>>;
};

export type SubscriptionResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  messageSent: SubscriptionResolver<ResolversTypes['Message'], "messageSent", ParentType, ContextType, RequireFields<SubscriptionMessageSentArgs, 'conversationId'>>;
};

export type UserResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  displayName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphQLContext> = {
  Conversation: ConversationResolvers<ContextType>;
  HealthStatus: HealthStatusResolvers<ContextType>;
  Message: MessageResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Subscription: SubscriptionResolvers<ContextType>;
  User: UserResolvers<ContextType>;
};

