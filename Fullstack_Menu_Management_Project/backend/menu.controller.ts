
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('menus')
export class MenuController {
    constructor(private readonly prismaService: PrismaService) {}

    @Get()
    async getMenus() {
        return this.prismaService.menu.findMany({ include: { children: true } });
    }

    @Post()
    async addMenu(@Body() data: { name: string, parentId?: number }) {
        return this.prismaService.menu.create({ data });
    }

    @Put(':id')
    async updateMenu(@Param('id') id: string, @Body() data: { name: string }) {
        return this.prismaService.menu.update({ where: { id: parseInt(id) }, data });
    }

    @Delete(':id')
    async deleteMenu(@Param('id') id: string) {
        return this.prismaService.menu.delete({ where: { id: parseInt(id) } });
    }
}
