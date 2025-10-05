import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Message } from "./schemas/message.schema";
import { Model } from "mongoose";
import { PubSub } from "graphql-subscriptions";
import { MESSAGE_SENT, PUB_SUB } from "@/common/constants/app.constants";
import { Conversation } from "../conversations/schemas/conversation.schema";

@Injectable()
export class MessagesService {
    constructor(
        @InjectModel(Message.name) private messageModel: Model<Message>,
        @InjectModel(Conversation.name) private conversationModel: Model<Conversation>,
        @Inject(PUB_SUB) private pubSub: PubSub,
    ) { }

    async createMessage(conversationId: string, senderId: string, content: string) {
        const conversation = await this.conversationModel.findById(conversationId).exec();
        if (!conversation) {
            throw new Error('Conversation not found');
        }

        if (!conversation.participants.includes(senderId)) {
            throw new Error('Sender is not a participant of the conversation');
        }

        const newMessage = new this.messageModel({ conversationId, senderId, content });
        const savedMessage = await newMessage.save();
        await this.pubSub.publish(MESSAGE_SENT, { messageSent: savedMessage });
        return savedMessage.id;
    }

    async getMessagesByConversationId(conversationId: string) {
        return this.messageModel.find({ conversationId }).sort({ createdAt: 1 }).exec();
    }
}