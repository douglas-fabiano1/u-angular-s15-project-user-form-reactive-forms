import { IUserFormAddress } from "./user-form-address.interface"
import { IUserFormPhone } from "./user-form-phone.interface"

export interface IUserFormContactInformations {
  phoneList: IUserFormPhone[];
  addressList: IUserFormAddress[];
}
