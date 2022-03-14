import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import EventCard from '../components/Reusable Components/eventCard';
import FindYourVoiceImg from '../resources/imgs/lit fest/find_your_voice.png';
import LitriviaImg from '../resources/imgs/lit fest/litrivia.png';
import TaleOfFourImg from '../resources/imgs/lit fest/tale_of_four.png';
import BBDMImg from '../resources/imgs/lit fest/bbdm.png';
import BookathonImg from '../resources/imgs/lit fest/bookathon.png';
import PhotographyImg from '../resources/imgs/lit fest/photography.png';
import ScreenBattlesImg from '../resources/imgs/lit fest/screen_battles.png';
import TreasureHuntImg from '../resources/imgs/lit fest/treasure_hunt.png';

export default function Events() {
  return (
    <React.Fragment>
      <Grid container>
        <EventCard
          title='Find Your Voice'
          content='Find your voice is the combination of story telling and slam poetry where the stage is set for you to bring out your inner poet and blow out the audience with your own finely crafted stories and poems. '
          image={FindYourVoiceImg}
          bgColor='#fff9c4'
          fontColor='#ff9800'
        />
        <EventCard
          title='A Tale of Four'
          content='Make the most compelling story with four pictures and wipe the floor with fellow competitors! '
          image={TaleOfFourImg}
          bgColor='#e1f5fe'
          fontColor='#04009A'
        />
        <EventCard
          title='Litrivia'
          content='An immaculate mixture of literature and trivia which tests the roots of your Literary knowledge. Answer the questions about the comics you grew up reading and stand a chance to win exciting prizes.'
          image={LitriviaImg}
          bgColor='#e0e0e0'
          fontColor='#000000'
        />
        <EventCard
          title='Bookathon'
          content='Reading is a kick start for countless adventures. Come fall in love with the most exciting books ever. Share your prescriptive and passion about reading. Let the journey of ur new beginning start with turning a page.'
          image={BookathonImg}
          bgColor='#ffe0b2'
          fontColor='#e65100'
        />
        <EventCard
          title='Screen Battles'
          content='Bring out your cameras and capture a beautiful and aesthetic video of the sponsors of literary festival and stand a chance to win exciting prizes! Keep the video within 30 seconds to apply for advertisement category and within 5 minutes for short film category. '
          image={ScreenBattlesImg}
          bgColor='#ffcdd2'
          fontColor='#b71c1c'
        />
        <EventCard
          title='Photography Contest'
          content='Capture the beauty of our extravagant event and stand a chance be awarded the best photographer title!'
          image={PhotographyImg}
          bgColor=''
          fontColor=''
        />
        <EventCard
          title='Treasure Hunt'
          content='An enticing event which involves mystery and all the patience in the world to hunt down clues and get your hands on that all important and extravagant treasure. '
          image={TreasureHuntImg}
          bgColor='#e8f5e9'
          fontColor='#1b5e20'
        />
        <EventCard
          title='BBDM'
          content='A mix of spicy ball game with a bit of added literature is the perfect combination for a delicious event! '
          image={BBDMImg}
          bgColor='#ffecb3'
          fontColor='#ffa000'
        />
      </Grid>
    </React.Fragment>
  );
}
