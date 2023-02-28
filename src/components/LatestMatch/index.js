import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    venue,
    competingTeam,
    date,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData

  return (
    <div className="latest-matches-container">
      <h1 className="latest-matches-header"> Latest Matches </h1>
      <div className="latest-match-card">
        <div className="competing-team-logo-card">
          <div>
            <p className="competing-team"> {competingTeam} </p>
            <p className="date"> {date} </p>
            <p className="venue"> {venue} </p>
            <p className="result"> {result} </p>
          </div>
          <div>
            <img
              src={competingTeamLogo}
              alt={`latest Match ${competingTeam}`}
              className="team-logo"
            />
          </div>
        </div>
        <hr className="line" />
        <div className="innings-umpires-card">
          <h1 className="heading"> First Innings </h1>
          <p className="paragraph"> {firstInnings} </p>
          <h1 className="heading"> Second Innings </h1>
          <p className="paragraph"> {secondInnings} </p>
          <h1 className="heading"> Mon Of The Match </h1>
          <p className="paragraph"> {manOfTheMatch} </p>
          <h1 className="heading"> Umpires </h1>
          <p className="paragraph"> {umpires} </p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
