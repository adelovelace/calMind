import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-image-puzzle',
  templateUrl: './image-puzzle.page.html',
  styleUrls: ['./image-puzzle.page.scss'],
  standalone: false, 
})
export class ImagePuzzlePage implements OnInit {

  imageUrl = 'assets/images/calmPuzzle.png'; // Ruta de la imagen
  pieces: any[] = [];
  shuffledPieces: any[] = [];
  rows: number = 2; // Fila predeterminada para nivel principiante
  cols: number = 2; // Columna predeterminada para nivel principiante
  totalPieces: number = 4; // Piezas por defecto
  level: string = 'beginner'; // Nivel por defecto

  constructor(private navCtrl:NavController) {
    this.createPuzzle();
  }

  ngOnInit(){
    
  }

  // Función para cambiar el nivel
  changeLevel(level: string) {
    this.level = level;
    this.pieces = [];
    this.shuffledPieces = [];

    if (level === 'beginner') {
      this.totalPieces = 4; // 2x2
    } else if (level === 'intermediate') {
      this.totalPieces = 9; // 3x3
    } else if (level === 'advanced') {
      this.totalPieces = 16; // 4x4
    }

    // Calcular el número de filas y columnas basados en el total de piezas
    const size = Math.sqrt(this.totalPieces);
    this.rows = this.cols = size; // Filas y columnas iguales para una cuadrícula cuadrada

    this.createPuzzle(); // Crear el rompecabezas de nuevo con el nuevo nivel
  }

  // Función para crear las piezas del puzzle
  createPuzzle() {
    const image = new Image();
    image.src = this.imageUrl;
    image.onload = () => {
      const pieceWidth = image.width / this.cols;  // Dividimos en columnas
      const pieceHeight = image.height / this.rows; // Dividimos en filas

      // Creamos las piezas dividiendo la imagen en partes
      for (let row = 0; row < this.rows; row++) {
        for (let col = 0; col < this.cols; col++) {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          if (ctx) {
            canvas.width = pieceWidth;
            canvas.height = pieceHeight;
            ctx.drawImage(
              image,
              col * pieceWidth,
              row * pieceHeight,
              pieceWidth,
              pieceHeight,
              0,
              0,
              pieceWidth,
              pieceHeight
            );
            this.pieces.push({ image: canvas.toDataURL(), id: row * this.cols + col });
          }
        }
      }

      this.shufflePieces(); // Mezclamos las piezas
    };
  }

  // Función para mezclar las piezas
  shufflePieces() {
    this.shuffledPieces = [...this.pieces];
    for (let i = this.shuffledPieces.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.shuffledPieces[i], this.shuffledPieces[j]] = [this.shuffledPieces[j], this.shuffledPieces[i]];
    }
  }

  // Función para manejar el intercambio de piezas
  swapPieces(index1: number, index2: number) {
    [this.shuffledPieces[index1], this.shuffledPieces[index2]] = [
      this.shuffledPieces[index2],
      this.shuffledPieces[index1],
    ];
  }

  goToQuestion(){
    this.navCtrl.navigateForward("/final-question")
  }
}