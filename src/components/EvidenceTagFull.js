import CloseIcon from '@mui/icons-material/Close'
import BlurOnIcon from '@mui/icons-material/BlurOn'
import SensorsIcon from '@mui/icons-material/Sensors'
import FingerprintIcon from '@mui/icons-material/Fingerprint'
import ThermostatIcon from '@mui/icons-material/Thermostat'
import HdrWeakIcon from '@mui/icons-material/HdrWeak'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'
const iconMap = {
  BlurOnIcon: BlurOnIcon,
  SensorsIcon: SensorsIcon,
  FingerprintIcon: FingerprintIcon,
  ThermostatIcon: ThermostatIcon,
  HdrWeakIcon: HdrWeakIcon,
  AutoStoriesIcon: AutoStoriesIcon,
  RecordVoiceOverIcon: RecordVoiceOverIcon,
}
export const EvidenceTagFull = ({
  name,
  longName,
  icon,
  isSelected,
  toggleEvidenceSelected,
  isForced,
}) => {
  const IconComponent = iconMap[icon]
  return (
    <span
      className={
        'tag is-medium has-pointer-on-hover' +
        (isSelected ? ' is-success' : ' is-transparent has-border') +
        (isForced ? ' is-forced-evidence' : '')
      }
      title={longName}
      onClick={toggleEvidenceSelected}
    >
      <span className="icon">
        {/* <i className={'fa fa-' + icon}></i> */}
        {IconComponent && <IconComponent />}
      </span>
      <span>{name}</span>
    </span>
  )
}

export default EvidenceTagFull
