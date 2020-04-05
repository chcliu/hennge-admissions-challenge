# HENNGE Admissions Challenge - Charles Liu

Thank you for the opportunity to work on this challenge. It took awhile to complete but it was really fun and challenging.

## Configuration and Tech Choices

I decided to do this challenge using a customly configured Typescript / Webpack / Babel / Sass / React repository.

This is not my first time working with any of these technologies, but it is the first time that I've started a repo using Typescript or Sass. The past experiences that I've had with these have been in projects that have already been configured so this was a nice experience.

Webpack and Babel configuration was mainly straightforward once I knew which loaders I was missing. There are many guides online that help you get this done relatively quickly. As you can see in my commit history, I took configuration one step at a time and configured as I went. When I realized I needed another loader for SVGs I added it and this would happen a few more times throughout this project.

Implementing Typescript from scratch was not an easy process, but I am glad to know that I have leveled up considerably now that I have had this experience. Using React means that I had to pass in many props to children components, values and set functions, making it so that I had to strictly type many variables and conflicts would happen very often. Thanks to Typescript's great documentation and the support of the internet, I was able to get all React components strictly typed well.

I am mainly used to using class based components in React. I know that functional components are on the rise and I wanted to take this opportunity to try making a project solely in functional React. The power of React Hooks surprised me as they offered great functionality really easily and I must say I am _hooked_.

I debated between Sass and Styled Components. I was interested in using Styled Components, but I wanted to demonstrate skills that may be beneficial to HENNGE. I wasn't sure what stack HENNGE uses, so I didn't want to limit myself to Styled Components which are mainly used in React and Vue. So I stuck with Sass which is still very powerful and implemented BEM naming convention.

## Implementing the Project

The project had a lot of great opportunities to test my abilities. 

It asked me to demonstrate that I was attentive to details in the little small nuances in the design. One detail I almost missed was setting the font color to black when selecting a title to sort emails by (e.g. From, Date, etc.). This was a good chance for me to practice using React's `useRef` hook which made it easy to implement.

There were a lot of intricate design choices that would be difficult to implement using just plain flexbox so I used grid to make more structured layout for components.

Setting the calendar dates was difficult for me. This was out of the scope of the project, but I wasn't satisfied with a simple input mask to type in dates. I feel like that is a horrible user experience so I went ahead and implemented a calendar date picker. To be honest, it can be improved. I didn't focus too hard on the design and I wasn't able to implement adding styling to dates in between two selected dates.

I wanted to do something more in lines with a pop up when selecting an email to display it's body. But since the assignment asked me to be able to open more than one body at once, I decided to implement it as an openable tab.

Thank you for reading this and I would love to hear back on what you think about how I implemented this project and if you have any suggestions on how I can improve. Much appreciated!
