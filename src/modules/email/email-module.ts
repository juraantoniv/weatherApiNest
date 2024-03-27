import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';

import { emailTypeConfig } from './email.type.config';
import { CustomConfigModule } from '../../common/configs/config.module';


@Module({
  imports: [CustomConfigModule,MailerModule.forRoot(emailTypeConfig)],
  providers: [],
  exports: [],
})
export class CustomEmailModule {}
