import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@ObjectType()
@Schema({ timestamps: true })
export class User extends Document {
    @Field(() => ID)
    id!: string;

    @Field()
    @Prop({ required: true, unique: true })
    name!: string;

    @Field()
    @Prop({ required: true, unique: true })
    email!: string;

    @Prop({ required: true })
    password!: string;

    @Field({ nullable: true })
    @Prop()
    displayName?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
