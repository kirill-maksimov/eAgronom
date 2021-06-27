import './menu-links.styles.scss';

type Props = {
  text: string,
  icon: string,
}

const MenuLink = ({ icon, text }: Props) => (
  <div className="nav__dropdown-links">
    <i className="material-icons">
      {icon}
    </i>
    <div className="nav__dropdown-text">{text}</div>
  </div>
)

export default MenuLink
