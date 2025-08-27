import { internalApi } from '../../config/api/internalApi';
import { TeamEntity } from '../../domain/entities/team.entity';
import { InternalApiTeamCreatedResponse } from '../../infreaestructure/interfaces/internalApi.interfaces';
import { TeamMapper } from '../../infreaestructure/mappers/team.mapper';

export const postCreateTeam = async ({
  name,
}: {
  name: string;
}): Promise<TeamEntity> => {
  try {
    const url = `/team`;
    const { data } = await internalApi.post<InternalApiTeamCreatedResponse>(
      url,
      {
        name,
      },
    );

    return TeamMapper.teamApiToEntity(data.team);
  } catch (error) {
    throw new Error('Error creating team');
  }
};
