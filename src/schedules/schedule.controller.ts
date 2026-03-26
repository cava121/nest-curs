import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from '@nestjs/common';
import { ScheduleDto } from 'src/schedules/models/schedule.dto';
import { ScheduleService } from 'src/schedules/schedule.service';

@Controller('schedule')
export class ScheduleController {
	constructor(private readonly scheduleService: ScheduleService) {}

	@Post()
	public async create(@Body() dto: ScheduleDto) {
		return this.scheduleService.create(dto);
	}

	@Delete(':id')
	public delete(@Param('id') id: string) {
		return this.scheduleService.delete(id);
	}

	@Get(':day')
	public getScheduleByDay(@Param('day') dayOfBooking: string) {
		return this.scheduleService.getByDayOfBooking(dayOfBooking);
	}

	@Patch(':id')
	public patch(@Param('id') id: string, @Body() dto: ScheduleDto) {
		return this.scheduleService.updateSchedule(dto, id);
	}

	@Get()
	public get() {
		return this.scheduleService.getAllSchedules();
	}
}
