import create from 'zustand';

// Define the store
const useStore = create(set => ({
	latestCats: 'empty',
	catTotalPages: null,
	perPage: 12,
	setLatestCats: ( array ) => set(state => ({ latestCats: array })),
	setCatTotalPages: ( nums ) => set(state => ({ catTotalPages: nums })),
}));

export default useStore;