import * as MUIcon from '@mui/icons-material'

export type MenuItem = {
  label: string
  route?: string
  iconName?: keyof typeof MUIcon
  subItems?: MenuItem[]
}
