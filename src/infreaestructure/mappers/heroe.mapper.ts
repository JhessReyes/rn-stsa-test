import { HeroEntity } from '../../domain/entities/hero.entity';
import { HeroApiHeroeResponse } from '../interfaces/heroApi.interfaces';

export class HeroMapper {
  static heroApiHeroeToEntity(heroApiHeroe: HeroApiHeroeResponse): HeroEntity {
    return {
      id: heroApiHeroe.id,
      avatar: heroApiHeroe.images.lg,
      name: heroApiHeroe.name,
      realName: heroApiHeroe.biography.fullName || 'No real name found.',
      alterEgos: heroApiHeroe.biography.alterEgos || 'No alter egos found.',
      powerStats: heroApiHeroe.powerstats,
      averageStats: Number(
        Number(
          Number(
            Object.values(heroApiHeroe.powerstats).reduce((acc, curr) => {
              return acc + curr;
            }, 0),
          ) / 6,
        )?.toFixed(2),
      ),
    };
  }
}
