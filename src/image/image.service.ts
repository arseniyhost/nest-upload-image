import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { ApiImage } from './image.model';

@Injectable()
export class ImageService {
    constructor(@InjectModel(ApiImage) private readonly imageModel: ReturnModelType<typeof ApiImage>) { }

    async create(file, createImgDto: { name: string, image_file: Buffer }) {
        console.log('my file: ', file);

        const newImage = await new this.imageModel(createImgDto);
        console.log('newImage: ', newImage);
        newImage.image_file.data = file.buffer
        newImage.image_file.contentType = file.mimetype
        
        return newImage.save();
    }

    async findAll() {
        return await this.imageModel.find({}, { image_file: 0}).lean().exec();
    }

    async getById(id) {
        return await this.imageModel.findById(id).exec();
    }   

    async removeImage(id) {
        return this.imageModel.findByIdAndDelete(id);
    }
}
