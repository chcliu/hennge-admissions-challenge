# Improvements

The UI was already well made and simple and I tried to stay as close to that in implementation, but there were places that could have some minor improvements. I also want to talk about improvements that could be made in some features I added that were not in the original design.

### Calendar / Date Picker / Date Range Bar

- The calendar picker that I created could be styled better. The arrows to navigate between months could use icons that are not just `<` and `>`.
- The calendar would represent a selected date with a light sky blue circle for up to two dates. It would be ideal if the dates between these two selected dates could have some styling to indicate that this is a range of dates instead of just two individual dates. In order to implement this, we would need to make it so that two selected dates in different months would also be able to stay no matter how many months we navigate from. Also, if I chose two dates from different months, the styling to show the dates in between are included, should also be carried on between months.
- The date range bar can be improved so that users can know which date they are selecting when choosing. For example, if I am selecting the first date, the first date in the search bar can be underline to signify that we are manipulating this underlined date.

### Email / Inbox

- The body container that I implemented could have been better. First, it could have had information on any cut off email address and subject headers that did not show up because the email components were too small.
- We could make it so that the mobile design is used over the current desktop design. One of the problems I had when implementing the body from an on click on the email is that there wasn't much space for me to think of a good looking design. Normal email messaging apps on desktop have something similar to the mobile design for this assignment on the left side and a right side dedicated to show a single email and all of it's information and features. The desktop version of this project would have looked better and been more powerful in terms of functionality if that kind of design was implemented and also it would have made implementation simplier as the mobile design would be recycled as a carbon copy for both desktop and mobile.
- Having the date format for emails be so different in terms of width made it hard to style some elements. It was hard to get the paper clip icon to look good next to the date in mobile since date can range from 4 characters to 10 characters which is a big fluctuation. Making a more uniform date format would make styling easier.
- The empty state image that reads Mail Archiver, looks more like an intro page or a welcome screen. I think a better empty state image where no emails are found would be an image and a small description explaining some relevant information such as "you have cleared all your archived messages as of YYYY/MM/dd" or some similar message to help avoid confusion for the user.
