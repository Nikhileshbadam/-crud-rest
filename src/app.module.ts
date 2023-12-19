import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://nikhil:i2yIxJXd9cH1njEa@cluster0.vmpyvwc.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name:'user' , schema: userSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
