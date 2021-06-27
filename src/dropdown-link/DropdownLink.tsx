import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ReduxState } from '../types/types'
import { getIsDropdownMenuVisible, getSelectedCompanyName } from '../store/selectors'
import { toggleDropdownMenuVisibility } from '../store/actions'
import DropdownMenu from '../dropdown-menu/DropdownMenu'

type ReduxProps = {
  isDropdownMenuVisible: boolean,
  selectedCompanyName: string | null,
}

type DispatchProps = {
  toggleDropdownMenuVisibility: () => void,
}

export const DropdownLink = ({isDropdownMenuVisible, selectedCompanyName, toggleDropdownMenuVisibility }: ReduxProps & DispatchProps) => (
  <>
    <div
      className={`nav__link ${(!isDropdownMenuVisible ? '' : 'nav__visible')}`}
      onClick={toggleDropdownMenuVisibility}
      data-test-nav-link
    >
      <div className="nav__link-text-wrapper">
        <div className="nav__link-text">
          Elon Musk
        </div>

        <div className="nav__link-subtext">
          {selectedCompanyName}
        </div>
      </div>

      <i className="material-icons-outlined nav__link-icon">
        settings
      </i>
    </div>

    {isDropdownMenuVisible && <DropdownMenu />}
  </>
)


export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    isDropdownMenuVisible: getIsDropdownMenuVisible,
    selectedCompanyName: getSelectedCompanyName,
  }),
  { toggleDropdownMenuVisibility }
)(DropdownLink)
