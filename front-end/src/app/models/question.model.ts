export class Question {
  id: number;
	text: string;
	type: string;
	formId: number;
	required: boolean;
	options: Array<string>;
}
