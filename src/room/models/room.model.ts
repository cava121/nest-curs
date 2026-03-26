import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { RoomDto } from 'src/room/models/room.dto';
import type { TTypeRoom } from 'src/room/models/room.interfaces';

export type RoomDocument = HydratedDocument<RoomModel>;

@Schema()
export class RoomModel implements RoomDto {
	@Prop({ required: true })
	number: number;

	@Prop({ required: true })
	type: TTypeRoom;

	@Prop({ required: true })
	hasSeaView: boolean;
}

export const RoomSchema = SchemaFactory.createForClass(RoomModel);
