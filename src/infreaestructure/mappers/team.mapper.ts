import {
  TeamEntity,
  TeamMemberEntity,
} from '../../domain/entities/team.entity';
import {
  InternalApiTeamMemberResponse,
  InternalApiTeamResponse,
} from '../interfaces/internalApi.interfaces';

export class TeamMapper {
  static teamApiToEntity(teamApi: InternalApiTeamResponse): TeamEntity {
    return {
      id: teamApi.id,
      name: teamApi.name,
      members: teamApi.members.map(memberApi =>
        this.teamMemberApiToEntity(memberApi),
      ),
      createdAt: teamApi.createdAt,
      updatedAt: teamApi.updatedAt,
    };
  }

  static teamMemberApiToEntity(
    teamMemberApi: InternalApiTeamMemberResponse,
  ): TeamMemberEntity {
    return {
      id: teamMemberApi.id,
      heroId: teamMemberApi.superheroId,
      hero: teamMemberApi.superhero,
    };
  }

  static teamsApiToEntities(teamsApi: InternalApiTeamResponse[]): TeamEntity[] {
    return teamsApi.map(teamApi => this.teamApiToEntity(teamApi));
  }
}
