import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import {
    USERS_SERVICE_NAME,
    CreateUserResponse,
    GetUsersResponse,
    GetUserByIdResponse,
} from './users.pb';
import { UsersService } from './users.service';
import { CreateUserDto, GetUserByIdDto } from './users.dto';

@Controller()
export class UsersController {
    @Inject(UsersService)
    private readonly service: UsersService;

    @GrpcMethod(USERS_SERVICE_NAME, 'CreateUser')
    createUser(payload: CreateUserDto): Promise<CreateUserResponse> {
        return this.service.createUser(payload);
    }

    @GrpcMethod(USERS_SERVICE_NAME, 'GetUsers')
    getUsers(): Promise<GetUsersResponse> {
        return this.service.getUsers();
    }

    @GrpcMethod(USERS_SERVICE_NAME, 'GetUserById')
    getUserById(payload: GetUserByIdDto): Promise<GetUserByIdResponse> {
        return this.service.getUserById(payload);
    }
}
