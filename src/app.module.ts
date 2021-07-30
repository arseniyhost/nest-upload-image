import { Module } from '@nestjs/common';
import { TypegooseModule } from "nestjs-typegoose";
import { ImageModule } from "./image/image.module";


@Module({
  imports: [ImageModule,
    TypegooseModule.forRoot('mongodb+srv://todo:12345@cluster0.nhqdc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
