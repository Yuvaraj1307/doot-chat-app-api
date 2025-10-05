import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import * as bcrypt from 'bcrypt';
import { User } from "./schemas/user.schema";
import { Model } from "mongoose";
import { CreateUserInput } from "./dto/create-user.input.dto";
import { BCRYPT_SALT_ROUNDS } from "@/common/constants/app.constants";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async createUser(input: CreateUserInput) {
        const emailExists = await this.userModel.findOne({ email: input.email }).exec();
        if (emailExists) {
            throw new BadRequestException('Email already exists');
        }

        const hashed = await bcrypt.hash(input.password, BCRYPT_SALT_ROUNDS);
        const createdUser = new this.userModel({ ...input, password: hashed, displayName: input.displayName });
        return createdUser.save();
    }

    async findByEmail(email: string) {
        return this.userModel.findOne({ email }).exec();
    }

    async findById(id: string) {
        return this.userModel.findById(id).exec();
    }
}