import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from '../auth/auth.service';
import { Follower, Following } from '../../libs/dto/follow/follow';
import { MemberService } from '../member/member.service';

@Injectable()
export class FollowService {
	constructor(
		@InjectModel('Follow') private readonly memberModel: Model<Follower | Following>,
		private authService: AuthService, //inctance olinyapdi
		private memberService: MemberService,
	) {}
}
