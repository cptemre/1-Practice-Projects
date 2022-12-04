$(function () {
  const QUOTES = [
    "Be yourself; everyone else is already taken.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "A room without books is like a body without a soul.",
    'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .',
    "Always forgive your enemies; nothing annoys them so much.",
    "A day without sunshine is like, you know, night.",
    "It is never too late to be what you might have been.",
    "For every minute you are angry you lose sixty seconds of happiness.",
    "If you can't explain it to a six year old, you don't understand it yourself.",
    "Everything you can imagine is real.",
    "You can never get a cup of tea large enough or a book long enough to suit me.",
    "Music expresses that which cannot be put into words and that which cannot remain silent.",
    "If you're gonna be two-faced at least make one of them pretty.",
    "A children's story that can only be enjoyed by children is not a good children's story in the slightest.",
    "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.",
    "Count your age by friends, not years. Count your life by smiles, not tears.",
    "All we have to decide is what to do with the time that is given us.",
    "Don't think or judge, just listen.",
    "The fault, dear Brutus, is not in our stars, but in ourselves.",
    "Anyone who lives within their means suffers from a lack of imagination.",
  ];
  // Random number function between 0 and Array length. Array length not included
  const random = () => {
    return Math.floor(Math.random() * QUOTES.length);
  };
  let index,
    i = 0;
  // Button Click Event. Change html if it is not the same as previous one
  const BTN_FUNC = () => {
    $("#btn").mouseup(function () {
      while (i == index) {
        i = random();
      }
      $("#random").html(QUOTES[i]);
      index = i;
    });
  };
  BTN_FUNC();
});
