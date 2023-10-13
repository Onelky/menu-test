import * as MUIcon from '@mui/icons-material'

export type MenuItem = {
  label: string
  iconName?: keyof typeof MUIcon
  subItems?: MenuItem[]
}
