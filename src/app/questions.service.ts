import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private questions: Question[] = [
    {
      id: 1,
      text: 'Which planet is closest to the Sun?',
      options: ['Earth', 'Venus', 'Mercury', 'Mars'],
      correctAnswer: 'Mercury',
    },
    {
      id: 2,
      text: 'Which language is primarily used for web development?',
      options: ['C#', 'Java', 'Python', 'JavaScript'],
      correctAnswer: 'JavaScript',
    },
    {
      id: 3,
      text: 'Which animal is the largest mammal?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      correctAnswer: 'Blue Whale',
    },
    {
      id: 4,
      text: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      correctAnswer: 'Paris',
    },
    {
      id: 5,
      text: 'Which element has the chemical symbol "O"?',
      options: ['Oxygen', 'Osmium', 'Oganesson', 'Osmium'],
      correctAnswer: 'Oxygen',
    },
    {
      id: 6,
      text: 'Who is the author of the Harry Potter series?',
      options: ['J.K. Rowling', 'George R.R. Martin', 'J.R.R. Tolkien', 'Stephen King'],
      correctAnswer: 'J.K. Rowling',
    },
    {
      id: 7,
      text: 'Which of these is not a prime number?',
      options: ['2', '3', '5',],
      correctAnswer: '2',
    },
    {
      id: 8,
      text: 'What is the capital of Japan?',
      options: ['Tokyo', 'Kyoto', 'Osaka', 'Hiroshima'],
      correctAnswer: 'Tokyo',
    },
    {
      id: 9,
      text: 'Who discovered penicillin?',
      options: ['Marie Curie', 'Alexander Fleming', 'Albert Einstein', 'Isaac Newton'],
      correctAnswer: 'Alexander Fleming',
    },
    {
      id: 10,
      text: 'Which of these is not a programming language?',
      options: ['Java', 'Python', 'HTML', 'Ruby'],
      correctAnswer: 'HTML',
    }
    // Add more questions in the same format
  ];

  constructor() {}

  getQuestions(): Question[] {
    return this.questions;
  }
}