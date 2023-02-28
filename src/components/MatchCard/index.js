import './index.css'

const MatchCard = props => {
  const {recentMatchData} = props
  const {
    result,
    matchStatus,
    competingTeam,
    competingTeamLogo,
  } = recentMatchData

  const getMatchStatusClassName = status =>
    status === 'Won' ? 'match-won' : 'match-loss'

  const matchStatusClassName = `match-status ${getMatchStatusClassName(
    matchStatus,
  )}`

  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="team-logo-img"
      />
      <p className="competing-team-header"> {competingTeam} </p>
      <p className="result-text"> {result} </p>
      <p className={matchStatusClassName}> {matchStatus} </p>
    </li>
  )
}

export default MatchCard
