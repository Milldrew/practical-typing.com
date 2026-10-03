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
    this.scoresList = createOrGetScores();
    if (data?.action === 'add') {
      // A public board: accept only a real name and a believable WPM, and keep
      // the best 100. (The IP address was stored too, and never used - gone.)
      const name = String(data.name ?? '').replace(/\s+/g, ' ').trim().slice(0, 20);
      const score = Number(data.score);
      if (!name || !Number.isFinite(score) || score < 1 || score > 250) {
        return {data: this.scoresList, action: 'sync'};
      }
      this.scoresList.push({name, score: Math.round(score)});
      this.scoresList.sort((a, b) => b.score - a.score);
      this.scoresList = this.scoresList.slice(0, 100);
      writeScoresJson(this.scoresList);
      data = {...data, name, score: Math.round(score)};
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
