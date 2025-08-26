export interface HeroEntity {
  id: number;
  name: string;
  avatar: string;
  realName: string;
  alterEgos: string;
  powerStats: HeroStatsEntity;
  averageStats: number;
}

export interface HeroStatsEntity {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}
