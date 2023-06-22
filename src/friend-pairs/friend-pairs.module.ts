// friend-pair.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FriendPairsController } from './friend-pairs.controller';
import { FriendPairService } from './friend-pairs.service';
import { FriendPairSchema } from './friend-pairs.model';
import { UserSelectionService } from './user-selection.service';
import { UserModel, UserSchema } from '../auth/user.model';
import { ErrorHandlerModule } from '../error-handler/error-handler.module';
import { ErrorHandlerService } from '../error-handler/error-handler.service';
import { FriendPairModel } from './friend-pairs.model';
import { AuthModule } from '../auth/auth.module';


@Module({
  imports: [MongooseModule.forFeature(
    [
      { name: 'User', schema: UserSchema },
      { name: 'FriendPair', schema: FriendPairSchema }
    ]), 
    ErrorHandlerModule],
    controllers: [FriendPairsController],
    providers: 
    [
      FriendPairService, 
       /*{
        provide: UserSelectionService,
        useFactory: (UserModel, FriendPairModel) => {
          return UserSelectionService.getInstance(UserModel, FriendPairModel);
        },
        
      },*/
      UserSelectionService, 
      ErrorHandlerService
    ],
})
export class FriendPairModule { }
