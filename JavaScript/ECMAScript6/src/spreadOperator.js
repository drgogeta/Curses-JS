const team1 = [ 'Daniel', 'Ricardo', 'Andres' ]
const team2 = [ 'Carlos', 'Erik', 'Jon' ,'Harold']
const fullTeam = ['New people', ...team1, ...team2]
console.log(fullTeam)

const person = {
    weight: 58,
    height: 60
}
const daniel = {
    ...person,
    name: 'Daniel'
}

console.log(daniel)