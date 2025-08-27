import { HeroEntity } from '../../domain/entities/hero.entity';

export interface InternalApiFavoritesResponse {
  message: string;
  favorites: FavoriteResonpe[];
}

export interface FavoriteResonpe {
  id: number;
  superheroId: number;
  superhero: HeroEntity;
  createdAt: string;
  updatedAt: string;
}

export interface InternalApiSwitchFavoriteResponse {
  message: string;
  error?: string;
  trace?: any;
}

export interface InternalApiTeamsResponse {
  message: string;
  teams: InternalApiTeamResponse[];
  error?: string;
  trace?: any;
}

export interface InternalApiTeamResponse {
  id: string;
  name: string;
  members: InternalApiTeamMemberResponse[];
  createdAt: string;
  updatedAt: string;
}

export interface InternalApiTeamMemberResponse {
  id: string;
  teamId: string;
  superheroId: string;
  superhero: HeroEntity;
}

export interface InternalApiTeamCreatedResponse {
  message: string;
  team: InternalApiTeamResponse;
  error?: string;
  trace?: any;
}
