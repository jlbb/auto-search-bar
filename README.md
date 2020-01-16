# Autocomplete SearchBox

This project is a [React](https://reactjs.org/docs/getting-started.html) application -created using [create-react-app](https://github.com/facebook/create-react-app)- which implements a search box where we can introduce a term, and performs a Star Wars planet search using the [Star Wars API](https://swapi.co/documentation#search). It loads the results in popup list, highlighting within the results the matching search substring.

### Setup

1. After [cloning](https://github.com/jlbb/auto-search-bar) or unzip the file run in the command shell `npm i` to perform the React and rest of dependencies installation

2. **Development server**: To run the development server `npm run start`. Open in the browser the url `localhost:3000`

3. **Production build**: To create a production build we can use the command `npm run build`

4. **Run production build**: To run the production build created in the previous point, we can use command `npm run start:prod` which will initiate an _http-server_ (open in the browser the url `localhost:8080`) loading the files generate in _/build/_

### Components

1. **SearchBox**

   - It will load the SearchInput and PopupList components, and will manage the redux actions to pass down to the children

   - It makes uses of react-redux hooks (_useSelector_ and _useDispatch_) to load state values and dispatch actions related to request or cancel a planet search

2. **SearchInput**

   - It renders an input text field where after changes in its value or press Enter, a side effect will trigger the search

   - When search is ongoing it will render a loading icon component on the middle of the input

   - When input text field is not empty a clear button appears in the right side of the input

   - Emptying the text input by keys or clicking the clear button, will trigger the clear action (managed by the SearchBox and that will stop the ongoing search)

   - The input changes are debounced to avoid triggering search by each keystroke. We use a custom hooks for it (useDebounce)

   - Use tabs to move between search input and clear button (when is visible)

3. **PopupList**

   - It renders a list of items containing a name field and show its text highlighting the marching text of the SearchInput

   - Clicking on an list item will load the text into the SearchInput and close the PopupList

   - Pressing ESC will close the PopupList

   - Using tabs will move us around the list items that can be selected by Enter or click

   - Clicking outside is managed by a custom hook (useOutsideNotifier)

4. **LoadingIcon**

   - It renders a loading SVG icon as a ReactComponent, that is using a _rotating_ animation (defined in the styles of the App component)

5. **ClearIcon**

   - It renders a clear SVG icon as a ReactComponent

### Redux

1. **sagas/planets.sagas**

   - The saga that will manage the side effect of the redux actions related to the planet search

   - _requestGetPlanets_ will perform, depending on the search active status, either a call to the api to get the planets and update the state, cancel the request, or filter over the fetched results when a regex is matched, in order to avoid re-fetching over the current results

2. **actions**

   - Actions to notify about a request, cancel or completed status of the planet search

3. **reducers/planets.reducer**

   - Reducer related to the planets, search word or search status. Manages how the state of the application is reduced depending on the redux actions triggered

4. **store**

   - File to define the redux store setup and middleware that will enhance it. We add redux-saga as a middleware here

   - React redux <Provider> component will wrap the App, also passing down this store as attribute

### Common

1. **api/sw-planets**

   - _getPlanets_ is the async function that will define the get planets search url and perform a GET request

   - Promise are resolved and check if it exists an offset, and next pages of results are available. If it exists is added to the composition of results and returned

2. **common/index**

   - Place to define general constants, types, etc.

   - Definition of constant values for redux actions, and redux action types

3. **common/api**

   - Constants for Star Wars base urls

   - It defines the _apiGet_ function that performs a GET request using the _axios_ library

4. **common/utils**

   - File with additional functions that serve for general purposes

   - _highlightSubstr_ is a function that given a word and a substring, it adds a <span> markup with the class _highlight_ around the substring found in the word
