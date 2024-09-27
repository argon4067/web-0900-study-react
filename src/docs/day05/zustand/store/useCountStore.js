import { create } from 'zustand';
import { devtools } from 'zustand/middleware'


// 스토어를 만들어서 어떤 걸 제공할꺼냐
const store = (set) => ({
  number : 0,
  increase : () => set((state) => ({
    number : state.number + 1
  })),
  decrease : () => set((state) => ({
    number : state.number -1
  }))
})

const useCountStore = create(devtools(store))

export default useCountStore;