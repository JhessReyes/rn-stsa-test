import { internalApi } from '../../config/api/internalApi';
import { HeroEntity } from './../../domain/entities/hero.entity';
import { InternalApiSwitchFavoriteResponse } from './../../infreaestructure/interfaces/internalApi.interfaces';
export const postSwitchFavorite = async ({
  hero,
}: {
  hero: HeroEntity;
}): Promise<InternalApiSwitchFavoriteResponse> => {
  try {
    const url = `/switch-favorite`;
    const { data } = await internalApi.post<InternalApiSwitchFavoriteResponse>(
      url,
      { superhero: hero },
    );

    return data;
  } catch (error) {
    throw new Error('Error posting switch favorite' + error);
  }
};
