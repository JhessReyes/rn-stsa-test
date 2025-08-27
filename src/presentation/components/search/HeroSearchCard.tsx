import { View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { HeroEntity } from '../../../domain/entities/hero.entity';
import { HeroTextCardContainer } from '../hero/HeroTextCardContainer';
import { IconButton } from '../shared';
import { useAddTeamMember } from '../../hooks/team/useAddTeamMember';
import { TeamMemberEntity } from '../../../domain/entities/team.entity';

export const HeroSearchCard = ({
  hero,
  members,
  teamId,
}: {
  hero: HeroEntity;
  members: TeamMemberEntity[];
  teamId: string;
}) => {
  const [disabled, setDisabled] = useState(false);
  const { mutateAsync, isPending } = useAddTeamMember();
  const isMember = (): boolean => {
    if (!members) return false;
    return members.find(member => member.heroId == hero.id?.toString()) != null;
  };

  useEffect(() => {
    setDisabled(isMember());
  }, [members]);

  const clickHandler = async () => {
    if (isPending) return;
    try {
      await mutateAsync({ hero, teamId });
      setDisabled(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1, flexDirection: 'row', paddingVertical: 15 }}>
      <Image
        source={{ uri: hero.avatarSmall }}
        style={{ height: 100, width: 100, borderRadius: 10 }}
      />
      <HeroTextCardContainer hero={hero} />
      <View
        style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}
      >
        <IconButton
          onPress={clickHandler}
          name="add"
          iconProps={{ height: 18, width: 18 }}
          disabled={isMember() || disabled}
        />
      </View>
    </View>
  );
};
