import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postCreateTeam } from '../../../actions/teams/post-create-team';
import { TeamEntity } from '../../../domain/entities/team.entity';

export const useCreateTeam = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ name }: { name: string }): Promise<TeamEntity> => {
      const data = await postCreateTeam({ name });
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
