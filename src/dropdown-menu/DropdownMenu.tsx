import MenuLink from '../menu-link/MenuLink';
import Companies from '../companies/Companies';
import './dropdown-menu.styles.scss';
import { toggleDropdownMenuVisibility } from '../store/actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReduxState } from '../types/types';
import { getIsDropdownMenuVisible, getSelectedCompanyName } from '../store/selectors';
import ClickAwayListener from 'react-click-away-listener';

type ReduxProps = {
  isDropdownMenuVisible: boolean,
  selectedCompanyName: string | null,
}

type DispatchProps = {
  toggleDropdownMenuVisibility: any,
}

const mockedMenuLinks = [
  {
    id: 1,
    text: "Get the mobile app",
    icon: "phone_iphone",
  },
  {
    id: 2,
    text: "Community",
    icon: "people",
  },
  {
    id: 3,
    text: "Knowledge base",
    icon: "book",
  },
  {
    id: 4,
    text: "Settings",
    icon: "settings",
  },
  {
    id: 5,
    text: "Log out",
    icon: "exit_to_app",
  },
];

export const DropdownMenu = ({toggleDropdownMenuVisibility }: ReduxProps & DispatchProps) => {
  const handleClickAway = () => {
    toggleDropdownMenuVisibility();
  };

  const onCompanyClick = (menuLink: any) => {
    if (menuLink.id === 4) {
      toggleDropdownMenuVisibility();
    }
  }
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="list__dropdown-companies">
          <Companies />
          <div className="list__dropdown-links">
            {
              mockedMenuLinks.map(menuLink => (
                <div key={menuLink.id} onClick={() => onCompanyClick(menuLink)}>
                  <MenuLink text={menuLink.text} icon={menuLink.icon} />
                </div>
              ))
            }
          </div>
      </div>
    </ClickAwayListener>
  )
}

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    isDropdownMenuVisible: getIsDropdownMenuVisible,
    selectedCompanyName: getSelectedCompanyName,
  }),
  { toggleDropdownMenuVisibility }
)(DropdownMenu)
