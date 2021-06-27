import { ActionType } from 'typesafe-actions'

import * as actions from '../store/actions'

export type ReduxState = {
  isDropdownMenuVisible: boolean,
  companies: Array<Company>,
  selectedCompanyId: number | null,
  selectedCompanyName: string | null,
}

export type Action = ActionType<typeof actions>

export type Company = {
  id: number,
  name: string,
}
