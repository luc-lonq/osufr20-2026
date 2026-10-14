import { Controller, Delete, Post, Get, Put } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) { }

  @Get()
  getPlayers(): object {
    return this.playersService.getPlayers();
  }

  @Get(':id')
  getPlayerById(id: number): object {
    return this.playersService.getPlayerById(id);
  }

  @Post()
  createPlayer(name: string): object {
    return this.playersService.createPlayer(name);
  }

  @Put(':id')
  updatePlayer(id: number, name: string): object {
    return this.playersService.updatePlayer(id, name);
  }

  @Delete(':id')
  deletePlayer(id: number): object {
    return this.playersService.deletePlayer(id);
  }
}
