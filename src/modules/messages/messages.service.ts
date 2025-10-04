import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Message } from "./schemas/message.schema";
import { Model } from "mongoose";
import { PubSub } from "graphql-subscriptions";
import { MESSAGE_SENT, PUB_SUB } from "@/common/constants/app.constants";

@Injectable()
export class MessagesService {
    constructor(
        @InjectModel(Message.name) private messageModel: Model<Message>,
        @Inject(PUB_SUB) private pubSub: PubSub,
    ) { }

    async createMessage(conversationId: string, senderId: string, content: string) {
        const newMessage = new this.messageModel({ conversationId, senderId, content });
        const savedMessage = await newMessage.save();
        await this.pubSub.publish(MESSAGE_SENT, { messageSent: savedMessage });
        return savedMessage.id;
    }

    async getMessagesByConversationId(conversationId: string) {
        return this.messageModel.find({ conversationId }).sort({ createdAt: 1 }).exec();
    }
}