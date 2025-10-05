import { Field, InputType } from "@nestjs/graphql";
import { IsString } from "class-validator";

@InputType()
export class SendMessageInput {
    @Field()
    @IsString()
    conversationId!: string;

    @Field()
    @IsString()
    content!: string;
}
