import {  Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';
import { Member } from '../../libs/dto/member/member';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { ObjectId } from 'bson';

@Resolver()
export class MemberResolver {
	constructor(private readonly memberService: MemberService) {}
	//Querty Rest Api'dagi => GET
	//Mutation Rest Api'dagi => POST

	@Mutation(() => Member)
	public async signup(@Args('input') input: MemberInput): Promise<Member> {
		//Args = Arguments //NestJS requestdan input ni olib, seni functioning ichidagi input o‘zgaruvchisiga joylayapti.
		console.log('Mutation signup');
		console.log('input', input);
		const result = await this.memberService.signup(input);
		return result;
	}

	@Mutation(() => Member)
	public async login(@Args('input') input: LoginInput): Promise<Member> {
		console.log('Mutation login');
		return this.memberService.login(input);
	}


//Authentication
  @UseGuards(AuthGuard)
	@Mutation(() => String)
	//authenticate bo'lgan memberni ma'lumotini olish uchun createParam decorator yozish kerak bo'ldi
	public async updateMember(@AuthMember("_id") Id: ObjectId): Promise<string> {
		console.log('Mutation updateMember');
		console.log('Id', Id);
		return this.memberService.updateMember();
	}

  @UseGuards(AuthGuard)
	@Query(() => String)
	//authenticate bo'lgan memberni ma'lumotini olish uchun createParam decorator yozish kerak bo'ldi
	public async checkAuth(@AuthMember("memberNick") memberNick: string): Promise<string> {
		console.log('Query checkAuth');
		console.log('memberNick', memberNick);
		return `Hi ${memberNick}, you are authenticated!`;
	}

	@Query(() => String)
	public async getMember(): Promise<string> {
		console.log('Mutation getMember');
		return this.memberService.getMember();
	}

	/** ADMIN **/

	//Authorization: ADMIN
@Mutation(() => String)
public async getAllMembersByAdmin(): Promise<string> {
	return this.memberService.getAllMembersByAdmin();
}

	//Authorization: ADMIN
@Mutation(() => String)
public async updateMemberByAdmin(): Promise<string> {
	console.log('Mutation updateMemberByAdmin');
	return this.memberService.updateMemberByAdmin();
}
}
