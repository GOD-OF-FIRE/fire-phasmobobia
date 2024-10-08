import { useContext, useMemo } from 'react'
import { SelectionContext } from '../../context/SelectionContext'
import { LocalSelectionContext } from '../../context/LocalSelectionContext'
import { filterPossibleGhosts } from '../../utils/filtering'
import {
  GhostIdentifiedResult,
  GhostRow,
  NoGhostsFoundResult,
} from '../../components'

export const GhostListPanel = ({ ghosts, evidence }) => {
  const {
    selectedEvidence,
    rejectedEvidence,
    getIsEvidenceSelected,
    toggleEvidenceSelected,
    getIsGhostRejected,
    toggleGhostRejected,
  } = useContext(SelectionContext)

  const { getIsGhostExpanded, toggleGhostExpanded, isTipsVisible } = useContext(
    LocalSelectionContext,
  )

  const visibleGhosts = useMemo(() => {
    return filterPossibleGhosts(selectedEvidence, rejectedEvidence, ghosts)
  }, [ghosts, selectedEvidence, rejectedEvidence])

  return (
    <div className="has-text-centered">
      <h2 className="mb-5 is-size-5 is-uppercase has-letter-spacing">Ghosts</h2>
      {visibleGhosts.length === 0 ? <NoGhostsFoundResult /> : null}
      {visibleGhosts.length === 1 ? <GhostIdentifiedResult /> : null}
      {visibleGhosts.map((ghost) => {
        return (
          <GhostRow
            key={ghost.id}
            ghost={ghost}
            allEvidence={evidence}
            getIsEvidenceSelected={getIsEvidenceSelected}
            toggleEvidenceSelected={toggleEvidenceSelected}
            getIsGhostRejected={getIsGhostRejected}
            toggleGhostRejected={toggleGhostRejected}
            getIsGhostExpanded={getIsGhostExpanded}
            toggleGhostExpanded={toggleGhostExpanded}
            showTips={isTipsVisible}
          />
        )
      })}
    </div>
  )
}
