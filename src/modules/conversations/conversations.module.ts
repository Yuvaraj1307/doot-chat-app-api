import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Conversation, ConversationSchema } from "./schemas/conversation.schema";
import { ConversationsService } from "./conversations.service";
import { ConversationsResolver } from "./conversations.resolver";

@Module({
    imports: [MongooseModule.forFeature([{ name: Conversation.name, schema: ConversationSchema}])],
    providers: [ConversationsService, ConversationsResolver],
    exports: [ConversationsService],
})
export class ConversationsModule { }
