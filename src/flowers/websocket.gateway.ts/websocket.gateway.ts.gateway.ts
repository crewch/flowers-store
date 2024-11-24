import { Logger } from '@nestjs/common'
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'

@WebSocketGateway()
export class WebsocketGatewayTsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger = new Logger('MessageGateway')

  @WebSocketServer() server: Server

  afterInit() {
    this.logger.log('Initialized')
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected id: ${client.id}`)
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected id: ${client.id}`)
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string) {
    this.logger.log(`Message ${message}`)
    this.server.emit('message', `Echo: ${message}`)
  }

  @SubscribeMessage('lol')
  handleLol(@MessageBody() message: string) {
    this.server.emit('lol', `Echo: ${message}`)
  }
}
