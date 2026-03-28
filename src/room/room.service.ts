import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoomDto } from 'src/room/models/room.dto';
import { RoomDocument, RoomModel } from 'src/room/models/room.model';

@Injectable()
export class RoomService {
	constructor(
		@InjectModel(RoomModel.name)
		private readonly roomModel: Model<RoomDocument>,
	) {}

	public getById(id: string) {
		return this.roomModel.findOne({ _id: id });
	}

	public create(dto: RoomDto) {
		const newRoom = new this.roomModel(dto);
		return newRoom.save();
	}

	public delete(id: string) {
		return this.roomModel.findByIdAndDelete(id);
	}

	public getRooms() {
		return this.roomModel.find();
	}

	public updateRoom(dto: RoomDto) {
		return this.roomModel.updateOne({ number: dto.number }, dto);
	}
}
