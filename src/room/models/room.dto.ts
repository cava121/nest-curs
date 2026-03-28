import { TTypeRoom } from 'src/room/models/room.interfaces';

export class RoomDto {
	number: number;
	type: TTypeRoom;
	hasSeaView: boolean;
}
