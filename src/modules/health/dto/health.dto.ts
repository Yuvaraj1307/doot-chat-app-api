import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class HealthStatus {
    @Field()
    status!: string;

    @Field()
    db!: string;

    @Field()
    pubSub!: string;

    @Field()
    timestamp!: string;
}