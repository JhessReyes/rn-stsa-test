export interface HeroEntity {
  id: number;
  name: string;
  avatar: string;
  avatarSmall: string;
  realName: string;
  alterEgos: string;
  powerStats: HeroStatsEntity;
  averageStats: number;
  isFavorite: boolean;
}

export interface HeroStatsEntity {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}
