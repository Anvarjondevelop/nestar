import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';
import { Member } from '../../libs/dto/member/member';

@Resolver()
export class MemberResolver {
	constructor(private readonly memberService: MemberService) {}
	//Querty Rest Api'dagi => GET
	//Mutation Rest Api'dagi => POST

	@Mutation(() => Member)
	@UsePipes(ValidationPipe)
	public async signup(@Args('input') input: MemberInput): Promise<Member> {
		try {
			//Args = Arguments //NestJS requestdan input ni olib, seni functioning ichidagi input o‘zgaruvchisiga joylayapti.
			console.log('Mutation signup');
			console.log('input', input);
			return this.memberService.signup(input);
		} catch (err) {
			console.log('Error , Signup', err);
			return err;
		}
	}

	@Mutation(() => String)
	@UsePipes(ValidationPipe)
	public async login(@Args('input') input: LoginInput): Promise<string> {
		console.log('Mutation login');
		return this.memberService.login();
	}
	@Mutation(() => String)
	public async updateMember(): Promise<string> {
		console.log('Mutation updateMember');
		return this.memberService.updateMember();
	}
	@Query(() => String)
	public async getMember(): Promise<string> {
		console.log('Mutation getMember');
		return this.memberService.getMember();
	}
}
