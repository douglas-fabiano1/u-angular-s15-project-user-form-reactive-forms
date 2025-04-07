import { DependentsList } from './../types/dependents-list';
import { IUserFormGeneralInformations } from "../interfaces/user-form/user-form-general-informations.interface";
import { IUserForm } from "../interfaces/user-form/user-form.interface";
import { IUser } from "../interfaces/user/user-interface";
import { convertDateObjToPtBrDate } from "./convert-date-obj-to-pt-br-date";
import { IUserFormPhone } from '../interfaces/user-form/user-form-phone.interface';
import { PhoneList } from "../types/phone-list";
import { IUserFormAddress } from "../interfaces/user-form/user-form-address.interface";
import { AddressList } from "../types/address-list";
import { IUserFormDependent } from "../interfaces/user-form/user-form-dependent.interface";

export const convertUserFormToUser = (userForm: IUserForm): IUser => {
  let newUser: Partial<IUser> = {} as IUser;

  newUser = { ...convertGeneraInformations(userForm.generalInformations) };
  newUser.phoneList = [...convertPhoneList(userForm.contactInformations.phoneList)];
  newUser.addressList = [...convertAddressList(userForm.contactInformations.addressList)];
  newUser.dependentsList = [...convertDependentsList(userForm.dependentsList)];

  return newUser as IUser;
};

const convertGeneraInformations = (generalInformations: IUserFormGeneralInformations): Partial<IUser> => {
  return {
    name: generalInformations.name,
    email: generalInformations.email,
    country: generalInformations.country,
    state: generalInformations.state,
    maritalStatus: generalInformations.maritalStatus,
    monthlyIncome: generalInformations.monthlyIncome,
    birthDate: convertDateObjToPtBrDate(generalInformations.birthDate),
  }
}

const convertPhoneList = (phoneList: IUserFormPhone[]): PhoneList => {
  const newUserPhoneList: PhoneList = phoneList.map((phone) => ({
    type: phone.type,
    internationalCode: phone.number.substring(0, 2),
    areaCode: phone.number.substring(2, 4),
    number: phone.number.substring(4),
  }));

  return newUserPhoneList;
};

const convertAddressList = (addressList: IUserFormAddress[]): AddressList => {
  const newUserAddressList: AddressList = addressList.map((address) => ({
    type: address.type,
    street: address.street,
    complement: address.complement,
    country: address.country,
    state: address.state,
    city: address.city,
  }));

  return newUserAddressList;
};

const convertDependentsList = (dependentsList: IUserFormDependent[]): DependentsList => {
  const newUserDependentsList: DependentsList = dependentsList.map((dependent) => ({
    name: dependent.name,
    age: Number(dependent.age),
    document: Number(dependent.document),
  }));

  return newUserDependentsList;
}

