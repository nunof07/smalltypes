import Paddle from './Paddle';
import Score from './Score';

export default interface Player {
    paddle: Paddle;
    score: Score;
    create(): void;
    update(): void;
}