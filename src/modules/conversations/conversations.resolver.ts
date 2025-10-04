import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Conversation } from "./schemas/conversation.schema";
import { ConversationsService } from "./conversations.service";
import { CreateConversationInput } from "./dto/create-conversation.input";

@Resolver(() => Conversation)
export class ConversationsResolver { 
    constructor(private conversationsService: ConversationsService) { }

    @Mutation(() => Conversation)
    async createConversation(@Args('input') input: CreateConversationInput) {
        return this.conversationsService.createConversation(input.participants, input.title);
    }

    @Query(() => [Conversation])
    async getUserConversations(@Args('userId') userId: string) {
        return this.conversationsService.getUserConversations(userId);
    }

    @Query(() => Conversation, { nullable: true })
    async getConversationById(@Args('conversationId') conversationId: string) {
        return this.conversationsService.getConversationById(conversationId);
    }
}