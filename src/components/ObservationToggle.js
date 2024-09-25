import CloseIcon from '@mui/icons-material/Close'
import BlurOnIcon from '@mui/icons-material/BlurOn'
import SensorsIcon from '@mui/icons-material/Sensors'
import FingerprintIcon from '@mui/icons-material/Fingerprint'
import ThermostatIcon from '@mui/icons-material/Thermostat'
import HdrWeakIcon from '@mui/icons-material/HdrWeak'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'

// Icon mapping
const iconMap = {
  BlurOnIcon: BlurOnIcon,
  SensorsIcon: SensorsIcon,
  FingerprintIcon: FingerprintIcon,
  ThermostatIcon: ThermostatIcon,
  HdrWeakIcon: HdrWeakIcon,
  AutoStoriesIcon: AutoStoriesIcon,
  RecordVoiceOverIcon: RecordVoiceOverIcon,
}
export const ObservationToggle = ({
  id,
  name,
  longName,
  icon,
  isSelected,
  toggleSelection,
  isRejected,
  toggleRejection,
  isAvailable,
}) => {
  // Get the correct Icon component from the iconMap
  const IconComponent = iconMap[icon]

  return (
    <div className="columns is-mobile is-vcentered">
      <div className="column is-offset-2 is-narrow">
        <div className="buttons has-addons">
          {/* Rejection button with CloseIcon */}
          <button
            className={'button' + (isRejected ? ' is-danger' : '')}
            onClick={() => toggleRejection(id)}
          >
            <span className="icon is-small">
              <CloseIcon />
            </span>
          </button>

          {/* Selection button with dynamic icon */}
          <button
            className={
              'button' +
              (isSelected ? ' is-success' : '') +
              (isAvailable ? '' : ' is-dark')
            }
            onClick={() => toggleSelection(id)}
          >
            <span className="icon is-small">
              {IconComponent && (
                <IconComponent className={isAvailable ? '' : 'has-text-dark'} />
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="column is-mobile mt-1" title={longName}>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default ObservationToggle
