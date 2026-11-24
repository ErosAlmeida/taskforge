import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
    return this.tasksService.findOne(Number(id));
  }

  @Post()
  createTask(@Param('id') id: string, @Body() task: TasksService) {
      return this.tasksService.create(task);
  }

  @Delete(':id')
  deletetask(@Param('id') id: string) {
    return this.tasksService.delete(Number(id));
  }
}
