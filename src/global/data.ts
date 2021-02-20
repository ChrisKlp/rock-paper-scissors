import scissors from '../assets/icon-scissors.svg';
import paper from '../assets/icon-paper.svg';
import rock from '../assets/icon-rock.svg';
import lizard from '../assets/icon-lizard.svg';
import spock from '../assets/icon-spock.svg';

export const data = [
  {
    name: 'scissors',
    icon: scissors,
    beats: [1, 3],
  },
  {
    name: 'paper',
    icon: paper,
    beats: [2, 4],
  },
  {
    name: 'rock',
    icon: rock,
    beats: [3, 0],
  },
  {
    name: 'lizard',
    icon: lizard,
    beats: [4, 1],
  },
  {
    name: 'spock',
    icon: spock,
    beats: [0, 2],
  },
];
