import {Logger} from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Server} from 'socket.io';
import {createOrGetScores, writeScoresJson} from './scores.functions';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class WsEventsGateway {
  scoresList: {
    name: string;
    score: number;
    ip?: string;
  }[] = [];
  constructor() {
    this.scoresList =
      createOrGetScores()
  }
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    return from([1, 2, 3]).pipe(map(item => ({event: 'events', data: item})));
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }
  @SubscribeMessage('scores')
  async scores(@MessageBody() data: {name: string, score: number, action: 'add' | 'sync'},
    @ConnectedSocket() client: any): Promise<{
      data: {name: string, score: number}[]
      action: 'sync'
    }> {
    Logger.log('scores', JSON.stringify(data));
    const ip = client.handshake.address;
    this.scoresList = createOrGetScores();
    if (data.action === 'add') {
      this.scoresList.push({name: data.name, score: data.score, ip});
      writeScoresJson(this.scoresList);
    }
    const scores = this.scoresList.map(score => ({name: score.name, score: score.score}));
    let returnObj: {
      data: {name: string, score: number}[]
      action: 'sync'
    } = {
      data: scores,
      action: 'sync',
    }
    const reuturnObj = {
      data: scores,
      action: 'sync',
    }
    if (data.action === 'add') {
      Object.assign(returnObj,
        {newScore: {name: data.name, score: data.score}})
    }
    this.server.emit('scores', returnObj);
    return returnObj;

  }
}
