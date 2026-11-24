import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task-dto';
import type { Task } from '../generated/prisma/client';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAllTasks() {
    return this.tasksService.findAllTasks();
  }

  @Get(':id')
  findOneTasks(@Param('id', ParseIntPipe) id: string) {
    return this.tasksService.findOne(id);
  }
//verificar pipe

  @Post()
  createTask(@Body() data: CreateTaskDto): Promise<Task> {
    return this.tasksService.create(data);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.delete(id);
  }

  @Patch(':id')
  updateTask(
    @Param('id') id: string,
    @Body() data: { title?: string; completed?: boolean },
  ): Promise<Task> {
    return this.tasksService.update(id, data);
  }
}
