import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
	ScheduleModel,
	ScheduleSchema,
} from 'src/schedules/models/schedule.model';
import { ScheduleController } from 'src/schedules/schedule.controller';
import { ScheduleService } from 'src/schedules/schedule.service';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: ScheduleModel.name, schema: ScheduleSchema },
		]),
	],
	controllers: [ScheduleController],
	providers: [ScheduleService],
})
export class SchedulesModule {}
