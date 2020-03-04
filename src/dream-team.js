module.exports = function createDreamTeam(members) {
  let nameTeam = [];
  if (Array.isArray(members)) {
    members.map(item => {
      if (typeof item === 'string') {
        nameTeam.push(item.trim().slice(0,1).toUpperCase())
      }
      
  })
  return nameTeam.sort().join('')
  }
  return false
};