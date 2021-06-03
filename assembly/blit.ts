declare function get_screen(): i32;

// aaaaaaaaa
declare function Surface_set_bounds(_this: i32, v_w: i32, v_h: i32): void;
declare function Surface_set_clip(_this: i32, v_x: i32, v_y: i32, v_w: i32, v_h: i32): void;
declare function Surface_get_alpha(_this: i32): i32;
declare function Surface_set_alpha(_this: i32, v: i32): void;
declare function Surface_set_pen(_this: i32, v_r: i32, v_g: i32, v_b: i32, v_a: i32): void;
declare function Surface_get_format(_this: i32): i32;
declare function Surface_get_pixel_stride(_this: i32): i32;
declare function Surface_get_row_stride(_this: i32): i32;
declare function Surface_get_mask(_this: i32): i32;
declare function Surface_set_mask(_this: i32, v:i32): void;
declare function Surface_get_sprites(_this: i32): i32;
declare function Surface_set_sprites(_this: i32, v:i32): void;
declare function Surface_get_transparent_index(_this: i32): i32;
declare function Surface_set_transparent_index(_this: i32, v: i32): void;
declare function Surface_get_rows(_this: i32): i32;
declare function Surface_get_cols(_this: i32): i32;
declare function Surface_load_string(filename: ArrayBuffer): i32;
declare function Surface_save(_this: i32, filename: ArrayBuffer): i32;
declare function Surface_offset_Rect(_this: i32, r_x: i32, r_y: i32, r_w: i32, r_h: i32): i32;
declare function Surface_offset_Point(_this: i32, p_x: i32, p_y: i32): i32;
declare function Surface_offset_int32_t_int32_t(_this: i32, x: i32, y: i32): i32;
declare function Surface_generate_mipmaps(_this: i32, depth: i32): void;
declare function Surface_clear(_this: i32): void;
declare function Surface_pixel(_this: i32, p_x: i32, p_y: i32): void;
declare function Surface_v_span(_this: i32, p_x: i32, p_y: i32, c: i32): void;
declare function Surface_h_span(_this: i32, p_x: i32, p_y: i32, c: i32): void;
declare function Surface_rectangle(_this: i32, r_x: i32, r_y: i32, r_w: i32, r_h: i32): void;
declare function Surface_circle(_this: i32, c_x: i32, c_y: i32, r: i32): void;
declare function Surface_line(_this: i32, p1_x: i32, p1_y: i32, p2_x: i32, p2_y: i32): void;
declare function Surface_triangle(_this: i32, p1_x: i32, p1_y: i32, p2_x: i32, p2_y: i32, p3_x: i32, p3_y: i32): void;
declare function Surface_text_string_Font_Rect_int_int(_this: i32, message: ArrayBuffer, font:i32, r_x: i32, r_y: i32, r_w: i32, r_h: i32, variable: i32, align: i32): void;
declare function Surface_text_string_Font_Point_int_int(_this: i32, message: ArrayBuffer, font:i32, p_x: i32, p_y: i32, variable: i32, align: i32): void;
declare function Surface_blit(_this: i32, src:i32, r_x: i32, r_y: i32, r_w: i32, r_h: i32, p_x: i32, p_y: i32, hflip: i32): void;
declare function Surface_stretch_blit(_this: i32, src:i32, sr_x: i32, sr_y: i32, sr_w: i32, sr_h: i32, dr_x: i32, dr_y: i32, dr_w: i32, dr_h: i32): void;
declare function Surface_stretch_blit_vspan(_this: i32, src:i32, uv_x: i32, uv_y: i32, sc: i32, p_x: i32, p_y: i32, dc: i32): void;
declare function Surface_watermark(_this: i32): void;
declare function Surface_blit_sprite(_this: i32, src_x: i32, src_y: i32, src_w: i32, src_h: i32, p_x: i32, p_y: i32, t: i32): void;
declare function Surface_stretch_blit_sprite(_this: i32, src_x: i32, src_y: i32, src_w: i32, src_h: i32, r_x: i32, r_y: i32, r_w: i32, r_h: i32, t: i32): void;
declare function Surface_sprite_Rect_Point_int(_this: i32, sprite_x: i32, sprite_y: i32, sprite_w: i32, sprite_h: i32, position_x: i32, position_y: i32, transform: i32): void;
declare function Surface_sprite_Point_Point_int(_this: i32, sprite_x: i32, sprite_y: i32, position_x: i32, position_y: i32, transform: i32): void;
declare function Surface_sprite_int_Point_int(_this: i32, sprite: i32, position_x: i32, position_y: i32, transform: i32): void;
declare function Surface_sprite_Rect_Point_Point_int(_this: i32, sprite_x: i32, sprite_y: i32, sprite_w: i32, sprite_h: i32, position_x: i32, position_y: i32, origin_x: i32, origin_y: i32, transform: i32): void;
declare function Surface_sprite_Point_Point_Point_int(_this: i32, sprite_x: i32, sprite_y: i32, position_x: i32, position_y: i32, origin_x: i32, origin_y: i32, transform: i32): void;
declare function Surface_sprite_int_Point_Point_int(_this: i32, sprite: i32, position_x: i32, position_y: i32, origin_x: i32, origin_y: i32, transform: i32): void;
declare function Surface_sprite_Rect_Point_Point_Vec2_int(_this: i32, sprite_x: i32, sprite_y: i32, sprite_w: i32, sprite_h: i32, position_x: i32, position_y: i32, origin_x: i32, origin_y: i32, scale_x: f32, scale_y: f32, transform: i32): void;
declare function Surface_sprite_Point_Point_Point_Vec2_int(_this: i32, sprite_x: i32, sprite_y: i32, position_x: i32, position_y: i32, origin_x: i32, origin_y: i32, scale_x: f32, scale_y: f32, transform: i32): void;
declare function Surface_sprite_int_Point_Point_Vec2_int(_this: i32, sprite: i32, position_x: i32, position_y: i32, origin_x: i32, origin_y: i32, scale_x: f32, scale_y: f32, transform: i32): void;
declare function Surface_sprite_Rect_Point_Point_float_int(_this: i32, sprite_x: i32, sprite_y: i32, sprite_w: i32, sprite_h: i32, position_x: i32, position_y: i32, origin_x: i32, origin_y: i32, scale: f32, transform: i32): void;
declare function Surface_sprite_Point_Point_Point_float_int(_this: i32, sprite_x: i32, sprite_y: i32, position_x: i32, position_y: i32, origin_x: i32, origin_y: i32, scale: f32, transform: i32): void;
declare function Surface_sprite_int_Point_Point_float_int(_this: i32, sprite: i32, position_x: i32, position_y: i32, origin_x: i32, origin_y: i32, scale: f32, transform: i32): void;

// wrap into something less horrible
export class Point {
  x: i32;
  y: i32;

  constructor(x: i32, y: i32) {
    this.x = x;
    this.y = y;
  }

  @operator("+")
  __add(a: Point) : Point {
    return new Point(this.x + a.x, this.y + a.y);
  }

  @operator("*")
  __mul(a: i32) : Point {
    return new Point(this.x * a, this.y * a);
  }
}

export class Rect {
  x: i32;
  y: i32;
  w: i32;
  h: i32;

  constructor(x: i32, y: i32, w: i32, h: i32) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

export const enum SpriteTransform {
  NONE = 0b000,
  HORIZONTAL = 0b001,
  VERTICAL = 0b010,
  XYSWAP = 0b100,
  R90 = 0b101,
  R180 = 0b011,
  R270 = 0b110
};

export class Pen {
  r: u8;
  g: u8;
  b: u8;
  a: u8;

  constructor(r: u8, g: u8, b: u8, a: u8 = 255) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a
  }
}

export class Surface {
  ptr: i32 = 0

  constructor(ptr: i32) {
    this.ptr = ptr;
  }

  set pen(pen: Pen) {
    Surface_set_pen(this.ptr, pen.r, pen.g, pen.b, pen.a);
  }

  get sprites() : Surface {
    return new Surface(Surface_get_sprites(this.ptr));
  }

  set sprites(surf: Surface) {
    Surface_set_sprites(this.ptr, surf.ptr);
  }

  static load_file(filename: string) : Surface {
    return new Surface(Surface_load_string(String.UTF8.encode(filename, true)))
  }

  clear(): void {
    Surface_clear(this.ptr);
  }

  // Font type
  // align enum
  text<T>(message: string, font: i32, p_or_r: T, variable: bool = true, align: i32 = 0): void {
    if(p_or_r instanceof Point)
      Surface_text_string_Font_Point_int_int(this.ptr, String.UTF8.encode(message, true), font, p_or_r.x, p_or_r.y, variable ? 1 : 0, align);
    else if(p_or_r instanceof Rect)
      Surface_text_string_Font_Rect_int_int(this.ptr, String.UTF8.encode(message, true), font, p_or_r.x, p_or_r.y, p_or_r.w, p_or_r.h, variable ? 1 : 0, align);
    else
      ERROR('Bad arg type');
  }

  // base, origin, float scale, Vec2 scale
  sprite<T>(sprite: T, position: Point, transform: SpriteTransform = 0): void {
    if(sprite instanceof i32)
      Surface_sprite_int_Point_int(this.ptr, i32(sprite), position.x, position.y, transform);
    else if(sprite instanceof Point)
      Surface_sprite_Point_Point_int(this.ptr, sprite.x, sprite.y, position.x, position.y, transform);
    else if(sprite instanceof Rect)
      Surface_sprite_Rect_Point_int(this.ptr, sprite.x, sprite.y, sprite.w, sprite.h, position.x, position.y, transform);
    else
      ERROR('Bad arg type');
  }
}

export const enum Button {
  DPAD_LEFT = 1,
  DPAD_RIGHT = 2,
  DPAD_UP = 4,
  DPAD_DOWN = 8,
  A = 16,
  B = 32,
  X = 64,
  Y = 128,
  MENU = 256,
  HOME = 512,
  JOYSTICK = 1024
}

@external("blit.outline_font")
export declare let outline_font: i32;
@external("blit.fat_font")
export declare let fat_font: i32;
@external("blit.minimal_font")
export declare let minimal_font: i32;

export const screen = new Surface(get_screen());

@external("blit.buttons")
export declare let buttons: i32;
@external("blit.buttons_pressed")
export declare let buttons_pressed: i32;
@external("blit.buttons_released")
export declare let buttons_released: i32;