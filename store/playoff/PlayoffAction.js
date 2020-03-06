import {PLAYOFF} from './PlayoffTypes';

export function getPlayoffAction(league) {
  const slicedEastArray = league.east?.slice(0, 8);
  const slicedWeastArray = league.west?.slice(0, 8);

  const eastPlayoffGroup = slicedEastArray && [
    {
      id: 1,
      hTeam: slicedEastArray[0].teamSitesOnly.teamName,
      vTeam: slicedEastArray[7].teamSitesOnly.teamName,
    },
    {
      id: 2,
      hTeam: slicedEastArray[1].teamSitesOnly.teamName,
      vTeam: slicedEastArray[6].teamSitesOnly.teamName,
    },
    {
      id: 3,
      hTeam: slicedEastArray[2].teamSitesOnly.teamName,
      vTeam: slicedEastArray[5].teamSitesOnly.teamName,
    },
    {
      id: 4,
      hTeam: slicedEastArray[3].teamSitesOnly.teamName,
      vTeam: slicedEastArray[4].teamSitesOnly.teamName,
    },
  ];

  const weastPlayoffGroup = slicedWeastArray && [
    {
      id: 1,
      hTeam: slicedWeastArray[0].teamSitesOnly.teamName,
      vTeam: slicedWeastArray[7].teamSitesOnly.teamName,
    },
    {
      id: 2,
      hTeam: slicedWeastArray[1].teamSitesOnly.teamName,
      vTeam: slicedWeastArray[6].teamSitesOnly.teamName,
    },
    {
      id: 3,
      hTeam: slicedWeastArray[2].teamSitesOnly.teamName,
      vTeam: slicedWeastArray[5].teamSitesOnly.teamName,
    },
    {
      id: 4,
      hTeam: slicedWeastArray[3].teamSitesOnly.teamName,
      vTeam: slicedWeastArray[4].teamSitesOnly.teamName,
    },
  ];

  const playoffTeams = {east: eastPlayoffGroup, weast: weastPlayoffGroup};

  return {type: PLAYOFF, payload: playoffTeams};
}
