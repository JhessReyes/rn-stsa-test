import { heroApi } from '../../config/api/heroApi';
import { HeroEntity } from '../../domain/entities/hero.entity';
import { HeroApiHeroeResponse } from '../../infreaestructure/interfaces/heroApi.interfaces';
import { HeroMapper } from '../../infreaestructure/mappers/heroe.mapper';
import { InternalApiFavoritesResponse } from '../../infreaestructure/interfaces/internalApi.interfaces';
import { internalApi } from '../../config/api/internalApi';

export const getHeroes = async (): Promise<HeroEntity[]> => {
  try {
    const url = `/all.json`;
    const { data: favorites } =
      await internalApi.get<InternalApiFavoritesResponse>('/favorites');
    const { data } = await heroApi.get<HeroApiHeroeResponse[]>(url);

    const heroes = HeroMapper.heroApiHeroesToEntities(
      data,
      favorites.favorites,
    );

    return heroes;
  } catch (error) {
    throw new Error('Error getting heroes');
  }
};
