import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Conversation } from "./schemas/conversation.schema";
import { Model } from "mongoose";

@Injectable()
export class ConversationsService {
    constructor(@InjectModel(Conversation.name) private conversationModel: Model<Conversation>) { }

    async createConversation(participants: string[], title?: string) {
        if (participants.length !== 2) {
            throw new BadRequestException('1-on-1 conversations must have exactly 2 participants');
        }

        const newConversation = new this.conversationModel({ participants, title });
        return newConversation.save();
    }

    async getUserConversations(userId: string) {
        return this.conversationModel.find({ participants: userId }).exec();
    }

    async getConversationById(conversationId: string) {
        return this.conversationModel.findById(conversationId).exec();
    }
}