# Kanban Board

## Overview
This is a simple Kanban Board web application designed to help users organize their daily tasks visually. Users can add new tasks to the "To Do" list and drag tasks between "To Do," "In Progress," and "Done" lists to track their progress.

## Features
- Drag and drop tasks between lists to update their status.
- Add new tasks dynamically to the "To Do" list.
- Responsive layout that adapts for desktop and mobile devices.
- Clean, intuitive interface with a purple-themed color palette.

## What I Learned
- How to implement drag-and-drop functionality using native JavaScript events (`dragstart`, `dragover`, `drop`, etc.).
- Managing DOM elements dynamically and updating the UI accordingly.
- Creating a responsive layout using Flexbox and CSS media queries.
- Handling user inputs to add new tasks and maintaining an interactive user experience.

## How it works
- Each task card is made draggable by setting the `draggable` attribute.
- When a drag starts, the task's ID is saved to the drag event’s dataTransfer object.
- Lists listen for drag events allowing tasks to be dropped and appended to the new list.
- Users can add new tasks using the input form; new tasks are automatically added to the "To Do" list and made draggable.
- The layout arranges the lists in a row on desktops, and stacks them vertically on smaller screens.