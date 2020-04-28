import { Question } from './models/question.model';

export const Questions: Question[] = [
  { id: 11, text: 'Who are you?', type: 'radio', formId: 11, required: true, options: ['witcher', 'mage', 'bard']},
  { id: 12, text: 'What is your name?', type: 'radio', formId: 11, required: true, options: ['Getalt', 'Ciri', 'Jaskier']},
  { id: 13, text: 'How are you?', type: 'text', formId: 11, required: false, options: ['']},
  { id: 14, text: 'Where have you been?', type: 'checkbox', formId: 11, required: false, options: ['Vysima', 'Novigrad', 'Cintra', 'Toussaint']}
];
