import { MESSAGE_SENT } from "@/common/constants/app.constants";
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@ObjectType()
@Schema({ timestamps: true })
export class Message extends Document {
    @Field(() => ID)
    id!: string;

    @Field()
    @Prop({ required: true })
    conversationId!: string;

    @Field()
    @Prop({ required: true })
    senderId!: string;

    @Field()
    @Prop({ required: true })
    content!: string;

    @Field()
    @Prop({ default: MESSAGE_SENT })
    status!: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
