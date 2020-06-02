import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';

@Resolver(of => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}
  @Query(reutrn => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Query(reutrn => [LessonType])
  lessons() {
    return this.lessonService.getAllLessons();
  }

  @Mutation(reutrn => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }
}
