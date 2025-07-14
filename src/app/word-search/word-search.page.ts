import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-word-search',
  templateUrl: './word-search.page.html',
  styleUrls: ['./word-search.page.scss'],
  standalone: false,
})
export class WordSearchPage implements OnInit {

  words = ['HAPPY', 'BRAVE', 'JOYFUL', 'HOPEFUL', 'COURAGE'];
  gridSize = 10;
  board: string[][] = [];
  selectedLetters: string[] = [];
  selectedCells: { x: number, y: number }[] = [];
  foundWords: Set<string> = new Set();
  permanentHighlights: { x: number, y: number }[] = [];

  isDragging = false;
  selectionDirection: 'horizontal' | 'vertical' | null = null;

  constructor(private NavCtrl: NavController) {
    this.generateBoard();
  }

  ngOnInit() {}

  generateBoard() {
    this.board = [];
    for (let i = 0; i < this.gridSize; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.gridSize; j++) {
        this.board[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      }
    }
    this.placeWords();
  }

  placeWords() {
    this.words.forEach(word => {
      const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
      if (direction === 'horizontal') {
        const startX = Math.floor(Math.random() * (this.gridSize - word.length));
        const startY = Math.floor(Math.random() * this.gridSize);
        for (let i = 0; i < word.length; i++) {
          this.board[startY][startX + i] = word[i];
        }
      } else {
        const startX = Math.floor(Math.random() * this.gridSize);
        const startY = Math.floor(Math.random() * (this.gridSize - word.length));
        for (let i = 0; i < word.length; i++) {
          this.board[startY + i][startX] = word[i];
        }
      }
    });
  }

  startSelection(x: number, y: number) {
    this.resetSelection();
    this.addLetterToSelection(x, y);
    this.isDragging = true;
    this.selectionDirection = null;  // Reset direction
  }

  continueSelection(event: TouchEvent) {
    if (!this.isDragging) return;

    const touch = event.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);

    if (element) {
      const xAttr = element.getAttribute('data-x');
      const yAttr = element.getAttribute('data-y');

      if (xAttr !== null && yAttr !== null) {
        const x = parseInt(xAttr);
        const y = parseInt(yAttr);
        this.addLetterToSelection(x, y);
      }
    }
  }

  endSelection() {
    this.isDragging = false;
    this.checkWord();
  }

  addLetterToSelection(x: number, y: number) {
    const alreadySelected = this.selectedCells.some(c => c.x === x && c.y === y);
    if (alreadySelected) return;

    if (this.selectedCells.length > 0) {
      const firstCell = this.selectedCells[0];

      if (!this.selectionDirection) {
        if (x === firstCell.x) {
          this.selectionDirection = 'vertical';
        } else if (y === firstCell.y) {
          this.selectionDirection = 'horizontal';
        } else {
          return;  // Block diagonal selection
        }
      }

      if (this.selectionDirection === 'horizontal' && y !== firstCell.y) {
        return;  // Block non-horizontal
      }

      if (this.selectionDirection === 'vertical' && x !== firstCell.x) {
        return;  // Block non-vertical
      }
    }

    this.selectedLetters.push(this.board[y][x]);
    this.selectedCells.push({ x, y });
  }

  checkWord() {
    const selectedWord = this.selectedLetters.join('');

    if (this.words.includes(selectedWord) && !this.foundWords.has(selectedWord)) {
      this.foundWords.add(selectedWord);
      this.permanentHighlights.push(...this.selectedCells);
      this.selectedLetters = [];
      this.selectedCells = [];
    } else {
      setTimeout(() => this.resetSelection(), 300);
    }
  }

  isSelected(x: number, y: number): boolean {
    const permanentlyHighlighted = this.permanentHighlights.some(cell => cell.x === x && cell.y === y);
    const currentlySelected = this.selectedCells.some(cell => cell.x === x && cell.y === y);

    return permanentlyHighlighted || currentlySelected;
  }

  resetSelection() {
    this.selectedLetters = [];
    this.selectedCells = [];
    this.selectionDirection = null;
  }

  isWordFound(word: string): boolean {
    return this.foundWords.has(word);
  }

  goToPuzzle() {
    this.NavCtrl.navigateForward("/image-puzzle");
  }

}
