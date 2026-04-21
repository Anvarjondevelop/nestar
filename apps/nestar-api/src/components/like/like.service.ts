import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Like } from '../../libs/dto/like/like';

@Injectable()
export class LikeService {
	constructor(@InjectModel('Like') private readonly likeModel: Model<Like>) {}
	//Like modelni NestJS orqali inject qilib,uni nomini likeModel deb atab,  class ichida ishlatishga tayyorlaydi
}
