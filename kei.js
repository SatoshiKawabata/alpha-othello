export const Player = {

  foo: function() {
    return 'hogehoge';
  },

  playerWhite: {
    isAI:true,
    getNextCell(state){
      let z = state.items.white.placeableCells.length-1;
      let c = Math.floor(Math.random () * z);
      return state.items.white.placeableCells[c];
    }
  },

   playerBlack: {
    isAI:false,
    getNextCell(state){
      let z = state.items.black.placeableCells.length-1;
      let c = Math.floor(Math.random () * z);
      return state.items.black.placeableCells[c];
    }
  }
};