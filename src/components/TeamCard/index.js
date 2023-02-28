// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {team} = props
  const {id, name, teamImageUrl} = team

  return (
    <li className="team-card-container">
      <Link to={`/team-matches/${id}`} className="link-text">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name"> {name} </p>
      </Link>
    </li>
  )
}

export default TeamCard
