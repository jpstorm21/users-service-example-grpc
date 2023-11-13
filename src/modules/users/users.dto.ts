import { IsEmail, IsString } from 'class-validator';
import { CreateUserRequest, GetUserByIdRequest } from './users.pb';

export class CreateUserDto implements CreateUserRequest {
    @IsString()
    public readonly name: string;
    @IsEmail()
    public readonly email: string;

    @IsString()
    public readonly password: string;
}

export class GetUserByIdDto implements GetUserByIdRequest {
    @IsString()
    public readonly id: string;
}
