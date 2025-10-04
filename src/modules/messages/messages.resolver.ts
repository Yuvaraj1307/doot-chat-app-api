import { Args, Mutation, Resolver, Subscription } from "@nestjs/graphql";
import { Message } from "./schemas/message.schema";
import { MessagesService } from "./messages.service";
import { Inject } from "@nestjs/common";
import { MESSAGE_SENT, PUB_SUB } from "@/common/constants/app.constants";
import { PubSub } from "graphql-subscriptions";
import { SendMessageInput } from "./dto/send-message.input";

@Resolver(() => Message)
export class MessagesResolver { 
    constructor(private messagesService: MessagesService, @Inject(PUB_SUB) private pubSub: PubSub) {}

    @Mutation(() => Message)
    async createMessage(@Args('input') input: SendMessageInput, @Args('senderId') senderId: string) {
        return this.messagesService.createMessage(input.conversationId, senderId, input.content);
    }

    @Mutation(() => [Message])
    async getMessagesByConversationId(@Args('conversationId') conversationId: string): Promise<Message[]> {
        return this.messagesService.getMessagesByConversationId(conversationId);
    }

    @Subscription(() => Message, {
        filter: (payload, variables) => payload.messageSent.conversationId === variables.conversationId,
    })
    messageSent(@Args('conversationId') conversationId: string) {
        return this.pubSub.asyncIterableIterator(MESSAGE_SENT);
    }
}