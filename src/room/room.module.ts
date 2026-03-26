import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomModel, RoomSchema } from 'src/room/models/room.model';
import { RoomController } from 'src/room/room.controller';
import { RoomService } from 'src/room/room.service';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: RoomModel.name, schema: RoomSchema },
		]),
	],
	controllers: [RoomController],
	providers: [RoomService],
})
export class RoomModule {}
