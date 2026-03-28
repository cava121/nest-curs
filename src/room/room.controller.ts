import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from '@nestjs/common';
import { RoomDto } from 'src/room/models/room.dto';
import { RoomService } from 'src/room/room.service';

@Controller('room')
export class RoomController {
	constructor(private readonly roomService: RoomService) {}

	@Post()
	public create(@Body() dto: RoomDto) {
		return this.roomService.create(dto);
	}

	@Delete(':id')
	public delete(@Param('id') id: string) {
		return this.roomService.delete(id);
	}

	@Patch()
	public patch(@Body() dto: RoomDto) {
		return this.roomService.updateRoom(dto);
	}

	@Get('all')
	public getRooms() {
		return this.roomService.getRooms();
	}

	@Get(':id')
	public getById(@Param('id') id: string) {
		return this.roomService.getById(id);
	}
}
