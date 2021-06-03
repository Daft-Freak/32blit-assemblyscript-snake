import { Button, buttons_pressed, outline_font, Pen, Point, Rect, screen, Surface } from "./blit";

let timer = 0;

const move_up = new Point(0, -1);
const move_down = new Point(0, 1);
const move_left = new Point(-1, 0);
const move_right = new Point(1, 0);
const move_stop = new Point(0, 0);

let snake: Point[] = [];
let apple: Point = new Point(0, 0);

let direction: Point;

let score: i32;

const sprite_snake = new Point(9, 10);
const sprite_apple = new Point(0, 0);

const game_bounds = new Rect(0, 0, 0, 0);

function random_int(min: i32, max: i32) : i32 {
  return i32(Math.floor(Math.random() * (max - min) + min));
}

function random_point(): Point {
  return new Point(random_int(0, game_bounds.w), random_int(0, game_bounds.h));
}

function restart_game(): void {
  snake = [new Point(10, 7)]; // center
  apple = random_point();
  score = 0
  direction = move_stop;
}

function move(): void {
  if(direction == move_stop)
    return;

  const top = snake[snake.length - 1];
  const head = top + direction;

  for(let i = 0; i < snake.length; i++) {
    if(snake[i].x == head.x && snake[i].y == head.y) {
      restart_game();
      return;
    }
  }

  snake.push(head);

  if(head.x == apple.x && head.y == apple.y) {
    apple = random_point();
    score ++;
  } else {
    // contains
    if(head.x < 0 || head.y < 0 || head.x >= game_bounds.w || head.y >= game_bounds.h) {
      restart_game();
      return;
    }

    snake.shift();
  }
}

export function init(): void {
  // calc (don't have screen.bounds)
  game_bounds.w = 20;
  game_bounds.h = 15;

  screen.sprites = Surface.load_file("dingbads.bin");
  restart_game();
}

export function update(time: i32): void {
  if(direction.x == 0) {
    if(buttons_pressed & Button.DPAD_RIGHT) direction = move_right;
    if(buttons_pressed & Button.DPAD_LEFT) direction = move_left;
  }
  if(direction.y == 0) {
    if(buttons_pressed & Button.DPAD_DOWN) direction = move_down;
    if(buttons_pressed & Button.DPAD_UP) direction = move_up;
  }

  // no Timer
  if(timer++ == 10) {
    timer = 0;
    move();
  }
}

export function render(time: i32): void {
  screen.pen = new Pen(0, 0, 0);
  screen.clear();

  for(let i = 0; i < snake.length; i++)
    screen.sprite(sprite_snake, snake[i] * 8);

  screen.sprite(sprite_apple, apple * 8);

  screen.pen = new Pen(0xFF, 0xFF, 0xFF);
  screen.text("score: " + score.toString(), outline_font, new Point(0, 0));
}