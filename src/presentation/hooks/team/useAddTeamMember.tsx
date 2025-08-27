import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TeamEntity } from '../../../domain/entities/team.entity';
import { HeroEntity } from '../../../domain/entities/hero.entity';
import { postAddTeamMember } from '../../../actions/teams/post-add-member';

export const useAddTeamMember = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      teamId,
      hero,
    }: {
      teamId: string;
      hero: HeroEntity;
    }): Promise<{ message: string }> => {
      const data = await postAddTeamMember({ teamId, hero });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['teams'],
      });
      console.log('Success');
    },
    onError: error => {
      console.log('Error creating team', error);
    },
  });
};
