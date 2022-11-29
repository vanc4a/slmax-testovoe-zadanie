import uuid from 'uuid-random';

export default class Note {
  title: string;
  description: string;
  id: string;
  date: string;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.id = uuid();
    this.date = new Date().toLocaleDateString();
  }
}
