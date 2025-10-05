import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Message, MessageSchema } from "./schemas/message.schema";
import { MessagesService } from "./messages.service";
import { MessagesResolver } from "./messages.resolver";
import { PubSubModule } from "@/core/pubsub/pubsub.module";
import { Conversation, ConversationSchema } from "../conversations/schemas/conversation.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Message.name, schema: MessageSchema },
            { name: Conversation.name, schema: ConversationSchema }
        ]),
        PubSubModule,
    ],
    providers: [MessagesService, MessagesResolver],
    exports: [MessagesService],
})
export class MessagesModule { }
