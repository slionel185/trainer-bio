import { create } from 'zustand'

interface FilterStore {
    filters: string[],
    addFilter: (filter: string) => void,
    removeFilter: (filter: string) => void
}

export const useFilterStore = create<FilterStore>()((set) => ({
    filters: ["CROSSFIT"],
    addFilter: (filter) => set((state) => ({ filters: [filter, ...state.filters] })),
    removeFilter: (filter) => set((state) => ({ filters: state.filters.filter((value) => value !== filter) }))
}))