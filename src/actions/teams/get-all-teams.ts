import { internalApi } from '../../config/api/internalApi';
import { TeamEntity } from '../../domain/entities/team.entity';
import { InternalApiTeamsResponse } from '../../infreaestructure/interfaces/internalApi.interfaces';
import { TeamMapper } from '../../infreaestructure/mappers/team.mapper';

export const getTeams = async (): Promise<TeamEntity[]> => {
  try {
    const url = `/teams`;
    const { data } = await internalApi.get<InternalApiTeamsResponse>(url);

    return TeamMapper.teamsApiToEntities(data.teams);
  } catch (error) {
    throw new Error('Error getting pokemons');
  }
};
