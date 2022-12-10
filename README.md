# Etch Sketch

A "The Odin Project" project to work on the skills and knowledge that I have learnt so far from it. 

Practise makes perfect, right?

Create an area full of square divs where when you hover over with your mouse, the divs change color. Then we have different options like:

- different colours to use
- different size of square divs to colour in
- and other stuff to come..

## Initial Commit

Added files and also some basic stuff for starters.

P.S. I did forget to add some links, ssoooo next commit it is then.

## Create Basic Canvas

I have roughly created the canvas with the divs, it isnt at all how it needs to be other than let say the "shape" of it. Everything is hard-coded at the moment.

## Add eventListener which changes the color

Hovering over the specific pixel will append an "active" class name which will then change the color.

## Update Canvas to be more robust

The number previously used to create the canvas was the total number of squares of the canvas. Now it is the number of rows and columns of the canvas. When creating the square divs the amount is taken into account and adjust the size of the divs accordingly. You can change the amount from the UI and it re-renders the canvas.

P.S. I do not like how the responsive sizes are actioned by inline css.

## Update Canvas according to guide lines

Updated the canvas so it will prompt the user when clikcing the button above the canvas to add the amount of rows and columns that the user inputs and will clear the previous canvas.