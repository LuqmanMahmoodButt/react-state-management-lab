import React from 'react'
import '../App.css'


const zombieFighters = [
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,

  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,

  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
 
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
  },

]



const ZombieGame = () => {
  
  const [money, setMoney] = React.useState(100)
  const [team, setTeam] = React.useState([])
  const [totalStrength, setTotalStrength] = React.useState(0)
  const [totalAgility, setTotalAgility] = React.useState(0)
  // const [failedPurchase, setFailedPurchase] = React.useState(0)
    
   
  const handleRemoveFighter = (removeIndex) => {
    const fighterToRemove = team[removeIndex]
    const newTeam = structuredClone(team).filter((fighter, index) => index !== removeIndex)
    // newTeam.splice(team[removeIndex], 1)
    
    setTotalStrength(totalStrength - fighterToRemove.strength)
    setTotalAgility(totalAgility - fighterToRemove.agility)
    setMoney(money + fighterToRemove.price)
    
    setTeam(newTeam)
  } 

 
  const handleAddFighter = (index) => {
    if (money >= zombieFighters[index].price) {
      const newFighter = structuredClone(team)
      newFighter.push(zombieFighters[index])
      setTeam(newFighter)

      setTotalStrength(totalStrength + newFighter.strength)
      setTotalAgility(totalAgility + newFighter.agility)
      const payment = money - zombieFighters[index].price 
      setMoney(payment)

    } else {
      return "not enough money"
    }
  
    
  }

console.log(money)


  return (
    <>

      <h1>${money}</h1>
    <div className='team-container'>
      <ul>
        <h1>Team</h1>
        {team.map((fighter, index) => {
          return <li key={index}>
          {fighter.name}<br />
          {fighter.price}<br />
          {fighter.strength}<br />
          {fighter.agility}<br />
          <button onClick={() => handleRemoveFighter(index)}>Remove Fighter</button>
            </li>})}</ul>
    </div>
  
      <ul >
        {zombieFighters.map((fighter, index) => {
          return <li key={index}>
          {fighter.name}<br />
          {fighter.price}<br />
          {fighter.strength}<br />
          {fighter.agility}<br />
          <button onClick={() => handleAddFighter(index)} >Add Fighter</button>
          
            </li>})}

      </ul>
          {team.length === 0 && <p>Pick some Team Members!</p>}
          <h2>Team Stats</h2>
          <p>Total Strength: {totalStrength}</p>
          <p>Total Agility: {totalAgility}</p>
     </>
   
  )
}

export default ZombieGame
