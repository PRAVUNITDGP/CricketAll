import { ModalTypes } from "../constants/modalType"

export interface ModalAction {
    type : ModalTypes;
    payload? : any;
}

export function showModal() : ModalAction {
    return {
        type : ModalTypes.ShowModal,
    };
}

export function hideModal() : ModalAction {
    return {
        type : ModalTypes.HideModal,
    }
};
