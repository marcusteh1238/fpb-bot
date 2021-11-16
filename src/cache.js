// lazy to use redis for now
const cacheObj = {};

async function getLastRegisteredSlashCommandTime(guildId) {
  const key = `lastRegSlashCmdTime_${guildId}`;
  return cacheObj[key];
}

async function setLastRegisteredSlashCommandTime(guildId) {
  const key = `lastRegSlashCmdTime_${guildId}`;
  cacheObj[key] = Date.now();
  return;
}

module.exports = {
  getLastRegisteredSlashCommandTime,
  setLastRegisteredSlashCommandTime
}
