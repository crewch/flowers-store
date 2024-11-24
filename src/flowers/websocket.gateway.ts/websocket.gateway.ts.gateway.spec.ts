import { Test, TestingModule } from '@nestjs/testing'
import { WebsocketGatewayTsGateway } from './websocket.gateway.ts.gateway'

describe('WebsocketGatewayTsGateway', () => {
  let gateway: WebsocketGatewayTsGateway

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebsocketGatewayTsGateway],
    }).compile()

    gateway = module.get<WebsocketGatewayTsGateway>(WebsocketGatewayTsGateway)
  })

  it('should be defined', () => {
    expect(gateway).toBeDefined()
  })
})
