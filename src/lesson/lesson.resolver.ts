import { Resolver, Query } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver(of => LessonType)
export class LessonResolver {
  @Query(reutrn => LessonType)
  lesson() {
    return {
      id: 'fdfdfd',
      name: 'physic class',
      startDate: (new Date()).toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
