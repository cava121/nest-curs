import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { RoomDto } from 'src/room/models/room.dto';
import { ScheduleDto } from 'src/schedules/models/schedule.dto';

export type ScheduleDocument = HydratedDocument<ScheduleModel>;

@Schema()
export class ScheduleModel implements ScheduleDto {
	@Prop({ type: 'number' })
	numberRoom: RoomDto['number'];

	@Prop()
	dayOfBooking: string;
}

export const ScheduleSchema = SchemaFactory.createForClass(ScheduleModel);
