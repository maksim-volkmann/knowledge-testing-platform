import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss']
})
export class DialogModalComponent implements OnInit {
  questions: string[] = [];
  lastPageIndex: number = 0

  pageSize: number = 5;
  pageIndex: number = 0;
  paginatedQuestions: string[] = [];

  constructor(private questionsService: QuestionsService) {}
  // constructor(){}

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
}