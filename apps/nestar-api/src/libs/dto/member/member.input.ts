import { Field, InputType } from '@nestjs/graphql';
import { IsIn, IsNotEmpty, IsOptional, Length, Min, MinLength } from 'class-validator';
import { MemberAuthType, MemberType } from '../../enums/member.enum';
import { availableAgentSorts } from '../../config';
import { Direction } from '../../enums/common.enum';

@InputType()
export class MemberInput {
	@IsNotEmpty()
	@Length(3, 12)
	@Field(() => String)
	memberNick: string;

	@IsNotEmpty()
	@Length(5, 12)
	@Field(() => String)
	memberPassword: string;

	@IsNotEmpty()
	@Field(() => String)
	memberPhone: string;

	@IsOptional()
	@Field(() => MemberAuthType, { nullable: true }) //bo'sh bo'lishi mumkin
	memberAuthType?: MemberAuthType;

	@IsOptional()
	@Field(() => MemberType, { nullable: true }) //bo'sh bo'lishi mumkin
	memberType?: MemberType;
}

@InputType()
export class LoginInput {
	@IsNotEmpty()
	@Length(3, 12)
	@Field(() => String)
	memberNick: string;

	@IsNotEmpty()
	@Length(5, 12)
	@Field(() => String)
	memberPassword: string;
}
@InputType()
class AISearch {
	@IsNotEmpty()
	@Field(() => String, { nullable: true })
	text?: string;
}

@InputType()
export class AgentsInquiry {
	@IsNotEmpty()
	@Min(1)
	@Field(() => String)
	page: number;

	@IsNotEmpty()
	@Min(1)
	@Field(() => String)
	limit: number;

	@IsOptional()
	@IsIn([availableAgentSorts])
	@Field(() => String, { nullable: true })
	sort: string;

	@IsOptional()
	@Field(() => Direction, { nullable: true })
	direction: Direction;

	@IsNotEmpty()
	@Field(() => AISearch, { nullable: true })
	search: AISearch;
}
