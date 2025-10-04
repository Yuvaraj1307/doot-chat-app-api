import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_NAME, MONGO_URI } from '@/common/constants/app.constants';

@Module({
    imports: [
        MongooseModule.forRoot(MONGO_URI, {
            dbName: DB_NAME
        }),
    ],
})
export class DatabaseModule { }
