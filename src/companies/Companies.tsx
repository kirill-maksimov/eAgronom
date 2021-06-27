import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './Companies.styles.scss'

import { ReduxState, Company } from '../types/types'
import { getCompanies } from '../store/selectors'

import CompanyLink from '../company-link/CompanyLink'

type ReduxProps = {
  companies: Array<Company>,
}

export const Companies = ({ companies }: ReduxProps) => (
  <div className="nav__dropdown-separator">
    <div className="nav__dropdown-header">YOUR COMPANIES</div>
    {
      companies.map((company) => <CompanyLink key={company.id} {...company} />)
    }
  </div>
)

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    companies: getCompanies,
  })
)(Companies)
