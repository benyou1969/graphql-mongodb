import { ObjectType, Field, ID } from '@nestjs/graphql';
import { type } from 'os';

@ObjectType('Lesson')
export class LessonType {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  StartDate: string;

  @Field()
  endDate: string;
}
