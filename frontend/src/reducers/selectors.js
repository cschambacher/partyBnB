export const selectSpot = (state, id) => {
    const spots = state.spots
    if (spots[id]) {
        const spot = spots[id];
        return spot;
    }
    return {};
};