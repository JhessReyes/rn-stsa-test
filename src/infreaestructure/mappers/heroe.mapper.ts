import { HeroEntity } from '../../domain/entities/hero.entity';
import { HeroApiHeroeResponse } from '../interfaces/heroApi.interfaces';
import { FavoriteResonpe } from '../interfaces/internalApi.interfaces';

export class HeroMapper {
  static heroApiHeroeToEntity(heroApiHeroe: HeroApiHeroeResponse): HeroEntity {
    return {
      id: heroApiHeroe.id,
      avatar: heroApiHeroe.images.lg,
      avatarSmall: heroApiHeroe.images.sm,
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
      isFavorite: false,
    };
  }

  static heroApiHeroesToEntities(
    heroApiHeroes: HeroApiHeroeResponse[],
    favorites: FavoriteResonpe[],
  ): HeroEntity[] {
    return heroApiHeroes.map(heroApiHeroe => {
      const _hero = this.heroApiHeroeToEntity(heroApiHeroe);
      const favorite = favorites.find(
        favorite => favorite.superheroId == _hero.id,
      );

      return {
        ..._hero,
        isFavorite: favorite ? true : false,
      };
    });
  }
}
