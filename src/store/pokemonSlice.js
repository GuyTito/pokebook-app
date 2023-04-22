import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPokemons = createAsyncThunk(
  "posts/fetchPokemons",
  async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=500"
      );
      const data = await response.json();
      return data.results;
    } catch (err) {
      return err.message;
    }
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemons: [],
    currentPokemons: [],
  },
  reducers: {
    updateCurrentPokemons: (state, action) => {
      const { itemOffset, endOffset } = action.payload;
      state.currentPokemons = state.pokemons.slice(itemOffset, endOffset);
    },
  },
  extraReducers(builder) {
    builder
      // .addCase(fetchPokemons.pending, (state, action) => {
      //   state.status = "loading";
      // })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        // state.status = "succeeded";
        state.pokemons = action.payload;
      });
    // .addCase(fetchPokemons.rejected, (state, action) => {
    //   state.status = "failed";
    //   state.error = action.error.message;
    // });
  },
});

export const getPokemons = (state) => state.pokemon.pokemons;
export const getCurrentPokemons = (state) => state.pokemon.currentPokemons;

export const { updateCurrentPokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer;
