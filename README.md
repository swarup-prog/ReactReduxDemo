Summary:

# How to initialize Redux in React?

1. Install @reduxjs/toolkit and react-redux packages using npm or yarn

2. Create a store

3. All of the components should be aware about the store so we wrap <App /> with a <Provider> that comes from react-redux library and pass in the store as prop in index.js

4. Define fiunctionality i.e. slicer
   How to create Slice:
   i. Declare initial state (how your state will look like when the application will start)
   ii. Use createSlice method and do the following:
   a. provide a name to your slice because there could be many slices
   b. provide it a initial state that you just declared  
    c. provide a list of reducers(all the reducer that you have)
   d. export your reducer out of slice which will later be used in store
   e. export all the individual method inside reducer because they will be useful wherever you are going to use dispatch

# How to add the things?

=> Use the useDispatch method and pass in what functionality you want to use

# How to extract the data?

=> Use the useSelector method which has access in the callback of the state and the state will give you whatever you need (not exactly whatever, just the states you have made LOL. Don't expect it to fulfil all yor wishes XD).
