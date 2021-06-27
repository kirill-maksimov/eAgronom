import { Company, ReduxState } from '../types/types'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getIsDropdownMenuVisible, getSelectedCompanyName } from '../store/selectors';
import { setSelectedCompanyName, toggleDropdownMenuVisibility } from '../store/actions'
import './company-link.style.scss'

type ReduxProps = {
  isDropdownMenuVisible: boolean,
  selectedCompanyName: string | null,
}

type DispatchProps = {
  toggleDropdownMenuVisibility: any,
  setSelectedCompanyName: any
}

const CompanyLink = ({ name, setSelectedCompanyName, toggleDropdownMenuVisibility, selectedCompanyName }: ReduxProps & DispatchProps & Company ) => {
  const onCompanyClick = (name: string) => {
    toggleDropdownMenuVisibility();
    setSelectedCompanyName(name);
  }
  return (
    <div
      className={`nav__dropdown-companies ${(selectedCompanyName === name) ? 'nav__dropdown-selected' : ''}`}
      onClick={() => onCompanyClick(name)}
    >
      {name}
      <div>{(selectedCompanyName === name) ? <i className="material-icons">done</i> : null}</div>
    </div>
  )
}

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    isDropdownMenuVisible: getIsDropdownMenuVisible,
    selectedCompanyName: getSelectedCompanyName,
  }),
  { setSelectedCompanyName, toggleDropdownMenuVisibility }
)(CompanyLink)
