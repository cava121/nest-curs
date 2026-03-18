import { Module } from '@nestjs/common';
import { RoomsController } from 'src/rooms/rooms.controller';
import { RoomsService } from 'src/rooms/rooms.service';

@Module({
	controllers: [RoomsController],
	providers: [RoomsService],
})
export class RoomsModule {}
