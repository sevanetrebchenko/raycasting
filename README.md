# 2D Raycasting

This project was done during the summer of 2019. It is a simple raycasting visualization using the p5.js library to
create a drawing canvas and JavaScript to run the simulation.

## Sketch

Drawing canvas supported by the p5.js library. Initializes randomly generated walls and the player at the position of
the mouse cursor.

## Ray Source

The "player" of the simulation. Player controlled ball of light that emits rays from its center in all directions.

## Ray

Simple line that gets cast from the source, intersecting with the first (closest) randomly generated wall.

## Wall

A wall initialized with a starting and ending position. Stationary.
