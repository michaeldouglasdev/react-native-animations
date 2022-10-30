import Chariot from '../../assets/images/tarot/chariot.png';
import Death from '../../assets/images/tarot/death.png';
import Devil from '../../assets/images/tarot/devil.png';
import Fool from '../../assets/images/tarot/fool.png';
import Hermit from '../../assets/images/tarot/hermit.png';
import HighPriestess from '../../assets/images/tarot/high-priestess.png';
import Judgment from '../../assets/images/tarot/judgement.png';
import Justice from '../../assets/images/tarot/justice.png';
import Lover from '../../assets/images/tarot/lover.png';
import Moon from '../../assets/images/tarot/moon.png';
import Pendu from '../../assets/images/tarot/pendu.png';
import Strength from '../../assets/images/tarot/strength.png';
import Sun from '../../assets/images/tarot/sun.png';
import Temperance from '../../assets/images/tarot/temperance.png';
import Tower from '../../assets/images/tarot/tower.png';
import Wheel from '../../assets/images/tarot/wheel.png';
import World from '../../assets/images/tarot/world.png';

export const getFakeTarotCards = (): string[] => {
  const cards = [
    Chariot,
    Death,
    Devil,
    Fool,
    Hermit,
    HighPriestess,
    Judgment,
    Justice,
    Lover,
    Moon,
    Pendu,
    Strength,
    Sun,
    Temperance,
    Tower,
    Wheel,
    World
  ]

  return cards;
}