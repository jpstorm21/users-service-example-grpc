import { Injectable } from '@nestjs/common';
import {
    CreateUserResponse,
    GetUsersResponse,
    GetUserByIdResponse,
    User,
} from './users.pb';
import { CreateUserDto, GetUserByIdDto } from './users.dto';

const userData: User[] = [{
    name: 'john',
    email: 'john@gmail.com',
    id: '1'
}];

@Injectable()
export class UsersService {
    public async createUser(payload: CreateUserDto): Promise<CreateUserResponse> {
        const user: User = {
            id: '2',
            email: payload.email,
            name: payload.name
        };

        userData.push(user);

        return { user, error: null };
    }

    public async getUsers(): Promise<GetUsersResponse> {
        return { data: userData };
    }

    public async getUserById({ id }: GetUserByIdDto): Promise<GetUserByIdResponse> {
        const user = userData.find(u => u.id === id);
        return { user, error: null };
    }
}
