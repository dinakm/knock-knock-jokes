function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  

  const KnockerJokes = [['Beets','Beats me!'], ['Lettuce', 'Lettuce in.'],['Hutch','Bless you!'] ,['Spell','W-h-o.']];
  // Store the 'wisdom' in an array
  let fullJoke = [];
  /*
  // Iterate over the object
  for(let prop in knockJokes) {
    let optionIdx = generateRandomNumber(knockJokes[prop].length)
    
    // use the object's properties to customize the message being added to personalWisdom  
    switch(prop) {
      case 'signInfo':
        personalWisdom.push(`Your sign right now is a "${collectiveWisdom[prop][optionIdx]}".`)
        break
      case 'fortuneOutput':
        personalWisdom.push(`You are having: "${collectiveWisdom[prop][optionIdx]}".`)
        break
      case 'advice':
        personalWisdom.push(`You should: "${collectiveWisdom[prop][optionIdx]}".`)
        break
      default:
        personalWisdom.push('There is not enough info.')
    }
  }
  
  function formatWisdom(wisdom) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = personalWisdom.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(personalWisdom);
  */