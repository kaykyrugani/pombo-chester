import HomeHero from '../../components/sections/HomeHero.jsx'
import HomeNextShows from '../../components/sections/HomeNextShows.jsx'
import SpotifyEmbed from '../../components/sections/SpotifyEmbed.jsx'
import InstagramFeed from '../../components/sections/InstagramFeed.jsx'
import HomeFinalCTA from '../../components/sections/HomeFinalCTA.jsx'

function Home() {
  return (
    <>
      <HomeHero />
      <HomeNextShows />
      <SpotifyEmbed />
      <InstagramFeed />
      <HomeFinalCTA />
    </>
  )
}

export default Home
