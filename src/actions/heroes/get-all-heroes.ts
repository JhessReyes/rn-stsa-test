import { heroApi } from '../../config/api/heroApi';
import { HeroEntity } from '../../domain/entities/hero.entity';
import { HeroApiHeroeResponse } from '../../infreaestructure/interfaces/heroApi.interfaces';
import { HeroMapper } from '../../infreaestructure/mappers/heroe.mapper';

export const getHeroes = async (): Promise<HeroEntity[]> => {
  try {
    const url = `/all.json`;
    const { data } = await heroApi.get<HeroApiHeroeResponse[]>(url);

    const heroes = data.map(hero => HeroMapper.heroApiHeroeToEntity(hero));

    return heroes;
  } catch (error) {
    throw new Error('Error getting heroes');
  }
};
