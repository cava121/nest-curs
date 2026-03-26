import { Module } from '@nestjs/common';
import { RoomModule } from './room/room.module';
import { SchedulesModule } from './schedules/schedule.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [
		MongooseModule.forRoot('mongodb://localhost:27017/nest', {
			user: 'admin',
			pass: 'secret',
			authSource: 'admin',
		}),
		ConfigModule.forRoot(),
		RoomModule,
		SchedulesModule,
	],
})
export class AppModule {}
