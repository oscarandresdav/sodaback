import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SidebarController } from './sidebar.controller';
import { SidebarService } from './sidebar.service';
import { Sidebar } from './entities/sidebar.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sidebar])],
  controllers: [SidebarController],
  providers: [SidebarService],
})
export class SidebarModule {}
