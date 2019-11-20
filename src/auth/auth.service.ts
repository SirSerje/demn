import { Injectable } from '@nestjs/common';
import { UsersService} from "../users/users.service";
import {async} from "rxjs/internal/scheduler/async";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private readonly  usersService: UsersService,
                private readonly jwtService: JwtService){

    }

    // TODO: think about bcrypt
    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if(user && user.password === pass) {
            const { password, ...result }=user;
            return result
        }
        return null
    }

    async login(user: any) {
        const payload = {username: user.username, sub: user.userId}
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

    async createNewUser(user: any) {
    console.log('try to create new user')
        return { response : "fine"
        }
    }
}