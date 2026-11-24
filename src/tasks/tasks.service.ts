import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [
    { id: 1, title: 'Estudar NestJS' },
    { id: 2, title: 'Estudar TypeScript' },
    { id: 3, title: 'Estudar Node.js' },
  ];

  findAllTasks() {
    return this.tasks;
  }

  findOne(id: number) {
    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  create(task: TasksService) {
    const tasks = this.tasks;

    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }
  //teste

  delete(number: number) {
    const tasks = this.tasks;

  }
}