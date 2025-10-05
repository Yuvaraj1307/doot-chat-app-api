import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@ObjectType()
@Schema({ timestamps: true })
export class Conversation extends Document {
    @Field(() => ID)
    id!: string;

    @Field(() => [String])
    @Prop({ type: [String], required: true, validate: [(val: string[]) => val.length === 2] })
    participants!: string[];
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);
