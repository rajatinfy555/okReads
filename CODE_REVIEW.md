CODE SMELLS & IMPROVEMENTS
1. In the component "book-search", subscribe is used but the subscription is no where being caught and destroyed. (FIXED)
- Failing to unsubscribe may lead to memory leaks and to solve this, either we have to unsubscribe the subscription or can make use of an async pipe.
- The subscription started in ngOnInit of BookSearchCompoent is never unsubscribed - possible memory leak
Observable used for this.store.select(getAllBooks) is not unsubscribed in book-search.component.ts file. This may lead to memory leak and performance issue.
-	Added async pipe in 'book-search.component.html' file line#33 to avoid memory leak. Async pipe will automatically unsubscribe the observable once component is destroyed
2.	Custom method formateDate() is being used for date format in book-search.component.html at line#45. (FIXED)
- We can use pipe instead to convert date into required format. This will help in performance improvement since function will be triggered everytime on change detection and wherein having pipe would evaluate the expression only once.
3. We should give the proper name for variables. It should be readable. and should follow sentence case
or cammel case format.
4. Using comman components from shared folder.
- Avoiding duplicacy.
5. Format date method is not necessary. Instead a default pipe for date format can be utilized. It will avoid calling the function repeatedly from the book-search component.

ACCESSIBILITY FIXES - Lighthouse
1. Images are used but there is no alternate text associated with them. It can at times result in Web accessibility issues.
2. Background and foreground colors do not have a sufficient contrast ratio for text in main section.
3. We can enable tab-index for all the search results to enable easy navigation between all search results.

UI IMPROVEMENTS - Manual 
1.	Spinner should be implemented for better user experience for search API.
2. We can avoid using autoFocus attribute in the "book-search" component. We can add aria-labels to buttons, say one to the "Want to Read" button in "book-search" component. As auto-focus is better for input elements to automatically set the focus when page loads, while aria-labels for buttons and link help in accessibility for screen readers.
3. Mobile UX was not correctly rendered. Book sections, reading list and buttons were overlapping. Corrected mobile view to provide better user experience.
4. Reading List button at navbar has less contrast highlight when hovered.
5. "Want to read" button is generic for all books if a user is using screen reader. Aria lable is added for uniquly identifying the   button as per each book.