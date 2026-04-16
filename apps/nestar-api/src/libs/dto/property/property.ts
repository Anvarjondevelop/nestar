import { Field, Int as Int, ObjectType } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { PropertyType } from '../../enums/property.enum';

@ObjectType()
export class Property {
	@Field(() => String)
	_id!: Types.ObjectId;

	@Field(() => PropertyType)
	propertyType!: PropertyType;

	@Field(() => String)
	propertyStatus!: string;

	@Field(() => String)
	propertyLocation!: string;

	@Field(() => String)
	propertyAddress!: string;

	@Field(() => String)
	propertyTitle!: string;

	@Field(() => Number)
	propertyPrice!: number;

	@Field(() => Number)
	propertySquare!: number;

	@Field(() => Int)
	propertyBeds!: number;

	@Field(() => Int)
	propertyRooms!: number;

	@Field(() => Int)
	propertyViews!: number;

	@Field(() => Int)
	propertyLikes!: number;

	@Field(() => [String])
	propertyImages!: string[];

	@Field(() => Int)
	propertyComments!: number;

	@Field(() => Number)
	propertyRank!: number;

	@Field(() => String, { nullable: true })
	propertyDesc?: string;

	@Field(() => Boolean)
	propertyBarter!: boolean;

	@Field(() => Boolean)
	propertyRent!: boolean;

	@Field(() => String)
	memberId!: string;

	@Field(() => Date, { nullable: true })
	soldAt?: Date;

	@Field(() => Date, { nullable: true })
	constructedAt?: Date;

	@Field(() => Date, { nullable: true })
	deletedAt?: Date;

	@Field(() => Date)
	createdAt!: Date;

	@Field(() => Date)
	updatedAt!: Date;
}
