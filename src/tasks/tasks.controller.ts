import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAllTasks() {
    return this.tasksService.findAllTasks();
  }

  @Get(':id')
  findOneTasks(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Post()
  createTask(@Body('title') title: string) {
    return this.tasksService.create(title);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.delete(id);
  }
  @Patch(':id')
  updateTask(
    @Param('id') id: string,
    @Body() data: { title: string; completed: boolean },
  ) {
    return this.tasksService.update(id, data.title, data.completed);
  }
}
