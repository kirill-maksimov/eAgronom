import { ReduxState, Company } from '../types/types'

export const getIsDropdownMenuVisible = (state: ReduxState) =>
  state.isDropdownMenuVisible

export const isCompanySelected = (state: ReduxState, props: { company: Company }) => 
  state.selectedCompanyId === props.company.id

export const getSelectedCompanyName = (state: ReduxState) =>
  state.selectedCompanyName

export const getCompanies = (state: ReduxState) =>
  state.companies
