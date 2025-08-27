import { HeroEntity } from './hero.entity';

export interface TeamEntity {
  id: string;
  name: string;
  members: TeamMemberEntity[];
  createdAt: string;
  updatedAt: string;
}

export interface TeamMemberEntity {
  id: string;
  heroId: string;
  hero: HeroEntity;
}
