## Legend:

- (*) = in progress.
- (**) = finished.

## Notes

- Aug 3rd. ~~Logic created to check for h4's in figure element, need to create and adjuts clicks accordingly to number of clicks per photo.~~ (**)

- August 8th. After juggling work and many attempts, I finally created a future proof code so far that if __ANY__ new additions of images are added for click targets with the same class, all data is generated automatically for the images. (Honestly, looking back I could have done things in a much simpler fashion updating one code at a time with methods that are less complicated.) Either way, I prefer to know that my data is streaming rather than requiring rewritten syntax.

- August 11th. Considered done now. Connected the list with the elements. By no means is the code actually pretty as it can be right now. The main goal was to just attempt to build with small tasks, then attempt to scale to other needs. Now I will be looking at how I can revise and organize a blueprint for rebuilding. (Though I have not abandon this repo for some experiments yet.)

## Todo's

- ~~The code in update and howMany methods currently is a core piece for the automatic data stream. There is a slight problem I will need to look at. The `next()` function call is what limits the ability for code and future images. Will probably have too find a way to stream that based on number of images as well.~~ (**)
###### Update: 
Just took a look with the temporary duplicate of the HTML elements, and yes the `next()` needs to be adjusted / streamlined. (*)

- So right now I should be considered done meeting the requirements and all. However, I plan on using this challenge to test out immutable Javascript. 