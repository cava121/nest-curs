import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ScheduleDto } from 'src/schedules/models/schedule.dto';
import {
	ScheduleDocument,
	ScheduleModel,
} from 'src/schedules/models/schedule.model';

@Injectable()
export class ScheduleService {
	constructor(
		@InjectModel(ScheduleModel.name)
		private readonly scheduleModel: Model<ScheduleDocument>,
	) {}

	public async create(dto: ScheduleDto) {
		const hasReservation = await this.scheduleModel
			.findOne({
				numberRoom: dto.numberRoom,
				dayOfBooking: dto.dayOfBooking,
			})
			.exec();

		if (hasReservation) {
			throw new ConflictException('Номер занят на эту дату');
		}

		const newSchedule = new this.scheduleModel(dto);
		return newSchedule.save();
	}

	public delete(id: string) {
		return this.scheduleModel.findByIdAndDelete(id);
	}

	public getByDayOfBooking(dayOfBooking: string) {
		return this.scheduleModel.find({ dayOfBooking });
	}

	public getAllSchedules() {
		return this.scheduleModel.find();
	}

	public updateSchedule(dto: ScheduleDto, id: string) {
		return this.scheduleModel.updateOne({ _id: id }, dto);
	}
}
