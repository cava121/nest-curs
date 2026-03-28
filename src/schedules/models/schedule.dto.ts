import { RoomDto } from 'src/room/models/room.dto';

export class ScheduleDto {
	numberRoom: RoomDto['number'];
	dayOfBooking: string;
}
