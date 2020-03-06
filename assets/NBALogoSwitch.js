import React from 'react';
import {Image} from 'react-native';

const NBALogoSwitch = ({teamName, width, height}) => {
  switch (teamName) {
    case 'Milwaukee': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/thumb/4/4a/Milwaukee_Bucks_logo.svg/200px-Milwaukee_Bucks_logo.svg.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Toronto': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/a/a2/Toronto_Raptors_logo.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Boston': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/thumb/d/d4/Boston_Celtics_logo.svg/250px-Boston_Celtics_logo.svg.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Miami': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/b/b2/Miami_Heat_logo.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Indiana': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/vec/c/c2/Indiana_Pacers_logo.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Philadelphia': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/thumb/6/68/Philadelphia_76ers_logo2.svg/1200px-Philadelphia_76ers_logo2.svg.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Orlando': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/thumb/b/bd/Orlando_Magic_logo2.svg/1200px-Orlando_Magic_logo2.svg.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Brooklyn': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/200px-Brooklyn_Nets_newlogo.svg.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Washington': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/thumb/a/af/Washington_Wizards_logo2.svg/1200px-Washington_Wizards_logo2.svg.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Charlotte': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/thumb/3/31/Logo_Charlotte_Hornets_%282014%29.png/200px-Logo_Charlotte_Hornets_%282014%29.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Chicago': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/thumb/d/d8/Chicago_Bulls_logo.png/200px-Chicago_Bulls_logo.png',
          }}
          style={{width: width, height: height}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Detroit': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/a/ae/Detroit_Pistons_logo.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'New York': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/b/bd/New_York_Knicks_logo.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Atlanta': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/thumb/e/ee/Atlanta_Hawks_logo2.svg/1200px-Atlanta_Hawks_logo2.svg.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Cleveland': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/a/ab/Cleveland_Cavaliers.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Los Angeles': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/200px-Los_Angeles_Lakers_logo.svg.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Denver': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/thumb/3/32/Denver_Nuggets_logonuovo.svg/200px-Denver_Nuggets_logonuovo.svg.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'LA': {
      return (
        <Image
          source={{
            uri:
              'https://logoeps.com/wp-content/uploads/2012/12/los-angeles-clippers-logo-vector.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Houston': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/b/b9/Houston_Rockets_logo.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Utah': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/thumb/0/04/Utah_Jazz_logo_%282016%29.svg/1200px-Utah_Jazz_logo_%282016%29.svg.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Oklahoma City': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/thumb/5/5d/Oklahoma_City_Thunder.svg/1200px-Oklahoma_City_Thunder.svg.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Dallas': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/thumb/9/9b/Dallas_Mavericks_logo2.svg/200px-Dallas_Mavericks_logo2.svg.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Memphis': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/thumb/6/6f/Memphis_Grizzlies_logo.png/200px-Memphis_Grizzlies_logo.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Portland': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/thumb/4/43/Portland_Trail_Blazers_logonew.svg/1198px-Portland_Trail_Blazers_logonew.svg.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'New Orleans': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/thumb/5/59/Logo_New_Orleans_Pelicans.png/200px-Logo_New_Orleans_Pelicans.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Sacramento': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/thumb/c/c7/SacramentoKings.svg/1200px-SacramentoKings.svg.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'San Antonio': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/e/ec/San_Antonio_Spurs_logo.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Phoenix': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/7/7d/Phoenix_Suns_logo_2013.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Minnesota': {
      return (
        <Image
          source={{
            uri:
              'https://ssl.gstatic.com/onebox/media/sports/logos/21Zm6e_zGiWXsaLCQyjVig_96x96.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    case 'Golden State': {
      return (
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/it/thumb/c/cc/Golden_State_Warriors_logo2.svg/838px-Golden_State_Warriors_logo2.svg.png',
          }}
          style={{width: width, height: height, marginHorizontal: 5}}
          resizeMode={'contain'}
        />
      );
    }
    default:
      return null;
  }
};

export default NBALogoSwitch;
