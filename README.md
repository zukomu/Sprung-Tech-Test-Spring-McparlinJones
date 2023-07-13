# SprungTechTestSpringMcparlinJones

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Project Notes

Due to some life obligations, I'm splitting the work on this across a few days. 
Day 1 - I spent about 3 hours getting the project set up, and creating the processes involved in handling all of the data. This means that I implemented basically everything that isn't part of a component.
Day 2 - spent 90 minutes getting the static screen elements (the inventory background, decor items, grid, etc.) to appear. Then spent half an hour getting icons to appear based on the items in the inventory. Currently the icons appear but they're not sorted into the grid yet, they're just floating at the side of the screen. I'm going to break for lunch and finish this when I get back.
Day 2, part 2 - Spent 2 hours getting the icons to appear in the grid properly, and adding functionality to the grid. All there is left to do, is to get the tooltip working, and maybe add some animation.
Day 3 - Spent 2 hours implementing the tooltip, and peforming a final sweep to check for any bugs, anything that I thought didn't look right, and anything that I though I could do better.
In the end, I spent around 8.5 hours on this. That's longer than I wanted to spend on it (I was aiming for ~7 hours), but I ended up having to spend a lot of time on getting the screen elements to display in just the right way. My process for doing that involved a lot of trial and error, which I'm sure was not the best way to go about doing that. Something I'd like to focus on in the future (whether with Sprung or with someone else), is optimising my process there, just so I don't continue to overrun on projects like this.

Final Thoughts - I had a lot of fun with this project! It's nothing like any of the work that I've done in the past, which meant I had a lot of opportunities to learn new things. 
The most enjoyably challenging part was getting the tooltip working. I've never had to create an object that followed the user's cursor before, so that represented an interesting new challenge for me. 
The most frustrating part was getting the inventory panel to look like the one in the image that was provided to me. It kind of felt like a jigsaw puzzle where none of the pieces actually fit together. 
There were some compromises that I had to make during the process. I'd have preferred to make the screen more reactive to things like the screen window size, but I knew there was a lot of functionality that I wanted to add. I ended up not prioritising that as I think it would have complicated things like the tooltip positioning, which was already something that I was worried about.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
