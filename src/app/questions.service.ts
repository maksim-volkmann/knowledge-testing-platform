import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private questions: string[] = [
    'Question 1',
    'Question 2',
    'Question 3',
    'Question 4',
    'Question 5',
    'Question 6',
    'Question 7',
    'Question 8',
    'Question 9',
    'Question 10',
    'Question 11',
    'Question 12',
    'Question 13',
    'Question 14',
    'Question 15',
    'Question 16',
    'Question 17',
    'Question 18',
    'Question 19',
    'Question 20',
    // Add your 20 questions here...
  ];

  constructor() {}

  getQuestions(): string[] {
    return this.questions;
  }
}