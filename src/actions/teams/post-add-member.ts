import { internalApi } from '../../config/api/internalApi';
import { HeroEntity } from '../../domain/entities/hero.entity';
import {
  InternalApiTeamMemberResponse,
  InternalApiTeamResponse,
} from '../../infreaestructure/interfaces/internalApi.interfaces';

export const postAddTeamMember = async ({
  teamId,
  hero,
}: {
  teamId: string;
  hero: HeroEntity;
}): Promise<{ message: string }> => {
  try {
    const url = `/add-team-member`;
    const { data } = await internalApi.post<{
      message: string;
      team: InternalApiTeamResponse;
      teamMember: InternalApiTeamMemberResponse;
    }>(url, {
      teamId,
      superhero: hero,
    });

    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Error creating team');
  }
};
