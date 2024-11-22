import { Injectable } from '@nestjs/common'

@Injectable()
export class FlowersService {
  findAll() {
    return [
      {
        name: 'rose',
        color: 'red',
        price: 5,
      },
      {
        name: 'tulip',
        color: 'white',
        price: 4,
      },
      {
        name: 'daisy',
        color: 'Yellow',
        price: 6,
      },
    ]
  }
}
