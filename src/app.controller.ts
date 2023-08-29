import { Controller, Get, Req, UseGuards, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';


// @Controller('')
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }

@Controller('auth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('google-redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req)
  }

  @Get("/facebook")
  @UseGuards(AuthGuard("facebook"))
  async facebookLogin(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get("/facebook/redirect")
  @UseGuards(AuthGuard("facebook"))
  async facebookLoginRedirect(@Req() req) {
    return {
      statusCode: HttpStatus.OK,
      data: req.user,
    };
  }

  @Get("/twitter")
  @UseGuards(AuthGuard("twitter"))
  async twitter(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get("/twitter/redirect")
  @UseGuards(AuthGuard("twitter"))
  async twitterLoginRedirect(@Req() req) {
    return {
      statusCode: HttpStatus.OK,
      data: req.user,
    };
  }

}
