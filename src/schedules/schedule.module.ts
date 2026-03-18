import { Module } from '@nestjs/common';
import { ScheduleController } from 'src/schedules/schedule.controller';
import { ScheduleService } from 'src/schedules/schedule.service';

@Module({
	controllers: [ScheduleController],
	providers: [ScheduleService],
})
export class SchedulesModule {}
