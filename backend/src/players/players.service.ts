import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayersService {
  getPlayers(): object {
    return { "message": "List of players" };
  }

  getPlayerById(id: number): object {
    return { "message": `Player with ID: ${id}` };
  }

  createPlayer(name: string): object {
    return { "message": `Player ${name} created` };
  }

  updatePlayer(id: number, name: string): object {
    return { "message": `Player with ID: ${id} updated to ${name}` };
  }

  deletePlayer(id: number): object {
    return { "message": `Player with ID: ${id} deleted` };
  }
}
