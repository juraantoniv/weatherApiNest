import { EEmailAction } from '../enums/email.action.enum';

export const templates = {
  [EEmailAction.WHEATHER]: {
    templateName: 'weather',
    subject: 'Weather on your city today',
  },
  [EEmailAction.ALLERT]: {
    templateName: 'weather.alert',
    subject: 'Weather alert!!!',
  },
};
