/*
TODOs:


1. App holds the entire page
2. Games list on the side
3. Game Player in the middle
4. Game Details on the Buttom



RSP:
Current TODO:

Find The Pair:

1. Find 10 random cards from Jack, Queen, King for 4x5 grid
2. Display all cards to the grid, each card should have a duplicate pair randomly positioned in the grid.
3. Start the game, start timer 60sec
4. open first card
5. open second card, if the same card as first, increase score
  else, reset all cards face down (reset flag for first card open)
6. If timer is out, GAME OVER
  if complete, Player Wins
  if complete and is quicker than previous best time, set new best time
7. Display Win/Game Over, Ask if player wanna play again
8. Reset if wanna play again.


Technical:
1. random select from all 12 people cards and put it in an array
2. create a new jsx for table where the cards will be stored
3. create a new jsx for each single card as a single component
4. create a timer function
5. reveal real value of the card and set the first card to partial variable for the first clicked card
6. reveal 2nd clicked card, compare it to the first card clicked























*/