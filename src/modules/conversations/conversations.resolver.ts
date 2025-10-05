import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Conversation } from "./schemas/conversation.schema";
import { ConversationsService } from "./conversations.service";
import { CreateConversationInput } from "./dto/create-conversation.input.dto";

@Resolver(() => Conversation)
export class ConversationsResolver { 
    constructor(private conversationsService: ConversationsService) { }

    @Mutation(() => Conversation)
    async createConversation(@Args('input') input: CreateConversationInput): Promise<Conversation> {
        return this.conversationsService.createConversation(input.participants, input.title);
    }

    @Query(() => [Conversation])
    async userConversations(@Args('userId') userId: string): Promise<Conversation[]> {
        return this.conversationsService.getUserConversations(userId);
    }

    @Query(() => Conversation, { nullable: true })
    async conversationById(@Args('conversationId') conversationId: string): Promise<Conversation | null> {
        return this.conversationsService.getConversationById(conversationId);
    }
}