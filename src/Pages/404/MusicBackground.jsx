import React, { Component } from 'react';
import './Music.css'; // Importa tu archivo CSS

class MusicBackground extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.canvas = null;
    this.ctx = null;
    this.numCircles = 50; // Número de círculos
    this.circles = []; // Array para almacenar la información de los círculos
    this.circleRadius = 20; // Radio de los círculos
  }

  componentDidMount() {
    this.canvas = this.canvasRef.current;
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.initializeCircles();
    this.animate();
  }

  initializeCircles() {
    const circleSpacing = this.canvas.width / (this.numCircles + 1);

    for (let i = 1; i <= this.numCircles; i++) {
      this.circles.push({
        x: i * circleSpacing,
        y: this.canvas.height / 2,
        color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
        speed: Math.random() * 2 + 1, // Velocidad de movimiento de los círculos
      });
    }
  }

  drawCircles() {
    this.circles.forEach((circle) => {
      this.ctx.beginPath();
      this.ctx.arc(circle.x, circle.y, this.circleRadius, 0, 2 * Math.PI);
      this.ctx.fillStyle = circle.color;
      this.ctx.fill();
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.circles.forEach((circle) => {
      circle.y += Math.sin(circle.speed * Date.now() * 0.001) * 2; // Modifica aquí la amplitud de movimiento
    });

    this.drawCircles();

    requestAnimationFrame(this.animate.bind(this));
  }

  render() {
    return <canvas ref={this.canvasRef} className="music-background" />;
  }
}

export default MusicBackground;