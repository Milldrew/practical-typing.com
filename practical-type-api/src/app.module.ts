import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ServeStaticModule} from '@nestjs/serve-static';
import {join} from 'path';
import { WsEventsModule } from './ws-events/ws-events.module';

const pathToBundle = join(process.cwd(), 'html-stuff/browser');
@Module({
  imports: [ WsEventsModule,
    ServeStaticModule.forRoot({
      rootPath: pathToBundle,
    }),
    WsEventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
