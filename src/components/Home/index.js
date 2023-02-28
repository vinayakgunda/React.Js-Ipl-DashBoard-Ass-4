// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamCardData: [], isLoading: true}

  componentDidMount() {
    this.getIplTeamCardData()
  }

  getIplTeamCardData = async () => {
    const received = await fetch('https://apis.ccbp.in/ipl')
    const data = await received.json()
    const {teams} = data
    const updatedData = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamCardData: updatedData, isLoading: false})
  }

  render() {
    const {teamCardData, isLoading} = this.state

    return (
      <div className="home-container">
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <div>
            <div className="ipl-logo-header-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo-img"
              />
              <h1 className="main-heading"> IPL Dashboard </h1>
            </div>
            <ul className="team-card-data">
              {teamCardData.map(eachData => (
                <TeamCard key={eachData.id} team={eachData} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
