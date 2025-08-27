import { useMutation, useQueryClient } from '@tanstack/react-query';
import { HeroEntity } from '../../../domain/entities/hero.entity';
import { postSwitchFavorite } from '../../../actions/favorites/post-switch-favorite';

export function useSwitchFavorite() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ hero }: { hero: HeroEntity }) => {
      const data = await postSwitchFavorite({ hero });
      return data;
    },
    onSuccess: (data, { hero }) => {
      queryClient.invalidateQueries({
        queryKey: ['favorites'],
      });
      queryClient.setQueryData<HeroEntity[]>(['heroes'], oldHeroes => {
        if (!oldHeroes) return oldHeroes;

        return oldHeroes.map(h =>
          h.id === hero.id ? { ...h, isFavorite: !h.isFavorite } : h,
        );
      });
    },
    onError: error => {
      console.log('Error updating thread', error);
    },
  });
}
