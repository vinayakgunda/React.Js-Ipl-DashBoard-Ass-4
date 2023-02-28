import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {
    teamMatchesData: [],
    recentMatchData: [],
    bannerUrl: '',
    isLoader: true,
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getUpdatedMatchData = latestMatchDetails => {
    const updatedMatchData = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      id: latestMatchDetails.id,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    return updatedMatchData
  }

  getUpdatedRecentMatchesData = recentMatches => {
    const updatedRecentMatchesData = recentMatches.map(eachObject => ({
      competingTeam: eachObject.competing_team,
      competingTeamLogo: eachObject.competing_team_logo,
      date: eachObject.date,
      firstInnings: eachObject.first_innings,
      id: eachObject.id,
      manOfTheMatch: eachObject.man_of_the_match,
      matchStatus: eachObject.match_status,
      result: eachObject.result,
      secondInnings: eachObject.second_innings,
      umpires: eachObject.umpires,
      venue: eachObject.venue,
    }))
    return updatedRecentMatchesData
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedData = await response.json()
    const updatedData = {
      teamBannerUrl: fetchedData.team_banner_url,
      latestMatchDetails: fetchedData.latest_match_details,
      recentMatches: fetchedData.recent_matches,
    }

    const {teamBannerUrl, latestMatchDetails, recentMatches} = updatedData
    const updatedMatchData = this.getUpdatedMatchData(latestMatchDetails)
    const updatedRecentMatchesData = this.getUpdatedRecentMatchesData(
      recentMatches,
    )

    this.setState({
      bannerUrl: teamBannerUrl,
      teamMatchesData: updatedMatchData,
      recentMatchData: updatedRecentMatchesData,
      isLoader: false,
    })
  }

  recentMatchesDetails = () => {
    const {recentMatchData} = this.state

    return (
      <ul className="recent-matches-card">
        {recentMatchData.map(eachData => (
          <MatchCard key={eachData.id} recentMatchData={eachData} />
        ))}
      </ul>
    )
  }

  renderTeamMatches = () => {
    const {bannerUrl, teamMatchesData} = this.state
    // console.log(bannerUrl)
    // console.log(teamMatchesData)

    return (
      <div className="team-matches-card">
        <img src={bannerUrl} alt="team banner" className="team-banner-img" />
        <LatestMatch latestMatchData={teamMatchesData} />
        {this.recentMatchesDetails()}
      </div>
    )
  }

  getRouterClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  renderLoader = () => (
    <div>
      <Loader type="Oval" color="#ffffff" height={50} className="loader" />
    </div>
  )

  render() {
    const {isLoader} = this.state

    const className = `team-matches-container ${this.getRouterClassName()}`

    return (
      <div className={className}>
        {isLoader ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
