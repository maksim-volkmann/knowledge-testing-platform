import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';
import { QuestionsService } from '../questions.service';
import { Question } from '../question';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss'],
})
export class DialogModalComponent implements OnInit, AfterViewInit {
  questions: Question[] = [];
  pageSize: number = 5;
  pageIndex: number = 0;
  lastPageIndex: number = 0;
  paginatedQuestions: Question[] = [];
  selectedAnswers: { [questionId: number]: string } = {};

  constructor(
    private questionsService: QuestionsService,
    private dialogRef: MatDialogRef<DialogModalComponent>,
    // private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.questions = this.questionsService.getQuestions();
    this.updatePaginatedQuestions();
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedQuestions();
  }

  updatePaginatedQuestions(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedQuestions = this.questions.slice(startIndex, endIndex);
  }

  ngAfterViewInit(): void {
    this.calculateLastPageIndex();
  }

  calculateLastPageIndex(): void {
    this.lastPageIndex = Math.ceil(this.questions.length / this.pageSize) - 1;
  }

  allQuestionsAnsweredOnPage(): boolean {
    return this.paginatedQuestions.every(
      (question) => this.selectedAnswers[question.id] !== undefined
    );
  }

  onNextButtonClick(): void {
    if (this.allQuestionsAnsweredOnPage()) {
      const nextPageEvent: PageEvent = {
        pageIndex: this.pageIndex + 1,
        pageSize: this.pageSize,
        length: this.questions.length,
      };
      this.onPageChange(nextPageEvent);
    }
  }

  countAnsweredQuestions(): number {
    return Object.keys(this.selectedAnswers).length;
  }

  calculateScore(): number {
    let score = 0;

    for (const question of this.questions) {
      if (this.selectedAnswers[question.id] === question.correctAnswer) {
        score++;
      }
    }

    return score;
  }

  countCorrectAnswers(): number {
    let correctAnswers = 0;

    for (const question of this.questions) {
      if (this.selectedAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    }

    return correctAnswers;
  }

  onSubmit(): void {
    const score = this.calculateScore();
    const totalQuestions = this.questions.length;
    const correctAnswers = this.countCorrectAnswers();

    // Display the score in a snackbar message
    // this.snackBar.open(`You answered ${correctAnswers} out of ${totalQuestions} questions correctly. Your score is ${score}.`, 'Close', {
    //   duration: 5000,
    //   verticalPosition: 'top',
    // });

    this.dialogRef.close();
  }

  onCancelButtonClick(): void {
    this.dialogRef.close();
  }
}