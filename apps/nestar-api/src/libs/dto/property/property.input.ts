import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional, Length, Min } from 'class-validator';
import { PropertyLocation, PropertyStatus, PropertyType } from '../../enums/property.enum';
import { Types } from 'mongoose';

@InputType()
export class PropertyInput {
	@IsNotEmpty()
	@Field(() => PropertyType)
	propertyType!: PropertyType;

	@IsNotEmpty()
	@Field(() => PropertyLocation)
	propertyLocation!: PropertyLocation;

	@IsNotEmpty()
	@Length(5, 100)
	@Field(() => String)
	propertyAddress!: string;

	@IsNotEmpty()
	@Length(5, 100)
	@Field(() => String)
	propertyTitle!: string;

	@IsNotEmpty()
	@Field(() => PropertyStatus)
	propertyStatus!: PropertyStatus;

	@IsNotEmpty()
	@Field(() => Int)
	propertyPrice!: number;

	@IsNotEmpty()
	@Field(() => Int)
	propertySquare!: number;

	@IsNotEmpty()
	@IsInt()
	@Min(1)
	@Field(() => Int)
	propertyBeds!: number;

	@IsNotEmpty()
	@IsInt()
	@Min(1)
	@Field(() => Int)
	propertyRooms!: number;

	@IsNotEmpty()
	@Field(() => [String])
	propertyImages!: string[];

	@IsOptional()
	@Length(5, 500)
	@Field(() => String, { nullable: true })
	propertyDesc?: string;

	@IsOptional()
	@Field(() => Boolean, { defaultValue: false })
	propertyBarter?: boolean;

	@IsOptional()
	@Field(() => Boolean, { defaultValue: false })
	propertyRent?: boolean;

	@IsOptional()
	@Field(() => Date, { nullable: true })
	constructedAt?: Date;

	memberId?: Types.ObjectId;
}
