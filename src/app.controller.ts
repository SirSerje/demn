
import {Controller, Get, Request, Post, UseGuards, Body} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import {AppService} from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService,
              private readonly appService: AppService) {}
  //
  // @Get('hello')
  // doSome(@Request() req:Request) {
  //
  //   this.appService.getHello(req.body);
  //   this.appService.getHello(req.headers);
  //   return 'ssss'
  // }


  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  // @Get('add')
  // async doAny(@Request() req: Request) {
  //   return this.authService.createNewUser({email:'asd'})
  // }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
