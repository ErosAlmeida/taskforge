import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  // Busca todas as tarefas
  findAllTasks() {
    return this.prisma.task.findMany();
  }

  // Busca uma tarefa pelo ID
  async findOne(id: string) {
    const task = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  // Cria uma nova tarefa
  create(title: string) {
    return this.prisma.task.create({
      data: {
        title,
        completed: false,
      },
    });
  }

  // Exclui uma tarefa pelo ID
  async delete(id: string) {
    const task = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return this.prisma.task.delete({
      where: { id },
    });
  }
  async update(id: string, title: string, completed: boolean) {
    const task = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return this.prisma.task.update({
      where: { id },
      data: {
        title,
        completed,
      },
    });
  }
}
