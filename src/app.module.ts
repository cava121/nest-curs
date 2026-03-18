import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './rooms/rooms.module';
import { SchedulesModule } from './schedules/schedule.module';

@Module({
	imports: [RoomsModule, SchedulesModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
