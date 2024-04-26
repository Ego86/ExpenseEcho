"use client"

export interface IData {
  colums: (string | number)[][]
  types: { x: string; y: string }
}
export const WIDTH: number = 600
export const HEIGHT: number = 200
export const PADDING: number = 40
export const DPI_WIDTH: number = WIDTH * 2
export const DPI_HEIGHT: number = HEIGHT * 2
export const VIEW_HEIGHT: number = DPI_HEIGHT - PADDING * 2
export const VIEW_WIDTH: number = DPI_WIDTH
export const ROWS_COUNT: number = 5
export const data: IData = {
  colums: [
    ["x", 15234, 2530124],
    ["y", 0, 0, 200, 200, 400, 400, 600, 150, 800, 320],
  ],
  types: { x: "x", y: "line" },
}
