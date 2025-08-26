import { HeroEntity } from '../../domain/entities/hero.entity';
import { HeroApiHeroeResponse } from '../interfaces/heroApi.interfaces';

export class HeroMapper {
  static heroApiHeroeToEntity(heroApiHeroe: HeroApiHeroeResponse): HeroEntity {
    return {
      id: heroApiHeroe.id,
      avatar: heroApiHeroe.images.lg,
      name: heroApiHeroe.name,
      realName: heroApiHeroe.biography.fullName,
      alterEgos: heroApiHeroe.biography.alterEgos,
      powerStats: heroApiHeroe.powerstats,
      averageStats: Object.values(heroApiHeroe.powerstats).reduce(
        (acc, curr) => acc + curr,
        0,
      ),
    };
  }
}
