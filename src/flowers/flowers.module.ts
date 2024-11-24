import { Module } from '@nestjs/common'
import { FlowersService } from './flowers.service'
import { FlowersController } from './flowers.controller'
import { PrismaService } from 'src/prisma.service'
import { ConfigService } from '@nestjs/config'
import { WebsocketGatewayTsGateway } from './websocket.gateway.ts/websocket.gateway.ts.gateway'

@Module({
  controllers: [FlowersController],
  providers: [
    FlowersService,
    PrismaService,
    ConfigService,
    WebsocketGatewayTsGateway,
  ],
})
export class FlowersModule {}
