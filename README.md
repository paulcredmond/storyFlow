storyFlow
=========

StoryFlow is a simple set of HTML & JS files that displays the next part of a story based on the user selecting one option from a variety of options which then reveals and scrolls to a new 'storyblock'. The script will also disable the buttons previously selected so the user cannot backtrack on what they have selected. The selected button will also be highlighted to allow the user to scroll back up to review what they have selected.

###HTML Version
This version has all the content on the page and jQuery will hide them by default. The storyblocks will be revealed as the user makes their choices.

###Ajax Version
This version has the various storyblocks stored in separate files and will load them as they are called using Ajax. Some changes to the code may be required depending on the source and file names of the storyblocks.

####Notes
* Uses jQuery from the HTML Boilerplate setup
* Default styles from Bootstrap
* Has the Cycle2 plugin integrated (MIT license). You can find out more at [the Cycle2 repo](https://github.com/malsup/cycle2).
