import { Question } from './models/question.model';

export const Questions: Question[] = [
  { id: 11, text: 'Who are you?', type: 'radio', formId: 11},
  { id: 12, text: 'What is your name?', type: 'radio', formId: 12},
  { id: 13, text: 'Question3', type: 'text', formId: 11},
  { id: 14, text: 'Where have you been?', type: 'checkbox', formId: 11}
];