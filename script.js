function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  

  const KnockerJokes = [['Beets','Beats me!'], ['Lettuce', 'Lettuce in.'],['Hutch','Bless you!'] ,['Spell','W-h-o.']];
  // Store the 'wisdom' in an array
  let fullJoke = [];

    let optionIdx = generateRandomNumber(KnockerJokes.length);
    fullJoke.push('knock knock');
    fullJoke.push('who is there');
    fullJoke.push(KnockerJokes[optionIdx][0]);
    fullJoke.push(KnockerJokes[optionIdx][0] + ' who');
    fullJoke.push(KnockerJokes[optionIdx][1]);

  function formatjoke(fullJoke) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = fullJoke.join('\n')
    console.log(formatted)
  }
  
  formatjoke(fullJoke);
  