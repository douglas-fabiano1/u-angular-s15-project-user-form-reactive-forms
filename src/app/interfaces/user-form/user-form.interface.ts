import { IUserFormContactInformations } from './user-form-contact-informations.interface';
import { IUserFormDependent } from './user-form-dependent.interface';
import { IUserFormGeneralInformations } from './user-form-general-informations.interface';

export interface IUserForm {
  generalInformations: IUserFormGeneralInformations;
  contactInformations: IUserFormContactInformations;
  dependentsList: IUserFormDependent[];
}
