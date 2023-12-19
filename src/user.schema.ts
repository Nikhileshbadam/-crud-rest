import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type UserDoc = User & Document
@Schema()
export class User{
    @Prop()
    userName: string;
    @Prop()
    des: string;
    @Prop({default: Date.now})
    date: Date;
}

export const userSchema = SchemaFactory.createForClass(User)