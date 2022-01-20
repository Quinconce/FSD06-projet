import { Schema } from 'mongoose';
import { CoreDocument, createModel } from '../common';


export interface ContactInformation{

    fullname: string

    email: string,

    phone: string,

    message: string,

    captcha: string,

    statut: 'non traitée' | 'en cours de traitement' | 'traitée',

    interlocutor?: string,

    date?: Date


}

export type ContactInformationDocument = ContactInformation & CoreDocument;


const contactInformationSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
    },

    phone: {
        type: String
    },

    message: {
        type: String,
        required: true
    },

    captcha: {
        type: String,
        required: true
    },

    statut: {
        type: String,
        default: 'non traitée'
    },

    interlocutor: {
        type: String,
    },

    date: {
        type: Date,
        default: new Date()
    }
});

export const ContactInformationModel =
createModel<ContactInformationDocument>('ContactInformation', contactInformationSchema)

