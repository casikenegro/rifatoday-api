import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback } from 'passport-twitter';
import { Injectable } from '@nestjs/common';

@Injectable()

export class TwitterStrategy extends PassportStrategy(Strategy, 'twitter') {
    constructor() {
      super({
        consumerKey: process.env.TWITTER_ID,
        consumerSecret: process.env.TWITTER_SECRET,
        callbackURL: 'http://localhost:3000/auth/twitter-redirect',
        scope: ['email', 'profile'],
      });
    }
    async validate(
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: VerifyCallback,
      ): Promise<any> {
        const { name, emails, photos } = profile;
        const user = {
          email: emails[0].value,
          firstName: name.givenName,
          lastName: name.familyName,
          picture: photos[0].value,
          accessToken,
          refreshToken,
        };
        done(null, user);
      }
    }