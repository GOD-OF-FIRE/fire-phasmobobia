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
export const EvidenceTag = ({
  name,
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
        (isSelected ? ' is-success' : ' is-transparent') +
        (isForced ? ' is-forced-evidence' : '')
      }
      onClick={toggleEvidenceSelected}
      title={name}
    >
      <span className="icon">{IconComponent && <IconComponent />}</span>
    </span>
  )
}

export default EvidenceTag
