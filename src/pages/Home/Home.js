import { TopNav } from '../../components'
import useVersionData from '../../utils/version'
import { EvidenceSelectorPanel } from './EvidenceSelectorPanel'
import { GhostListPanel } from './GhostListPanel'

export const Home = ({ rawEvidence, rawGhosts }) => {
  const versionData = useVersionData()

  return (
    <div className="content-wrapper">
      <div className="content-main content">
        <div className="container">
          <TopNav />
          <div className="columns">
            <div className="column is-3">
              <EvidenceSelectorPanel
                evidence={rawEvidence}
                ghosts={rawGhosts}
              />
            </div>
            <div className="column is-9">
              <GhostListPanel ghosts={rawGhosts} evidence={rawEvidence} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
