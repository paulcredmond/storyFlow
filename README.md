storyFlow
=========

StoryFlow is a way to navigate a series of HTML blocks (which I'll call 'storyblocks') by providing the user with options to take them on various paths to the end of the story. After a path is selected, the appropriate storyblock is revealed, and scrolled to automatically. The script will also disable the buttons previously selected so the user cannot backtrack on what they have already selected. The selected button will also be highlighted to allow the user to scroll back up to review what they have chosen.

###HTML Version
This version has all the content on the page and jQuery will hide them by default. The storyblocks will be revealed as the user makes their choices.

###Ajax Version
This version has the various storyblocks stored in separate files and will load them as they are called using Ajax. Some changes to the code may be required depending on the source and file names of the storyblocks.

####Notes
* Default files from the [HTML Boilerplate](https://github.com/h5bp/html5-boilerplate) and [Bootstrap](http://getbootstrap.com/).
* Has the Cycle2 plugin integrated (MIT license). You can find out more at [the Cycle2 repo](https://github.com/malsup/cycle2).
