// 
import * as todoStorage from '../utils/todoStorage'
import { ref, watchEffect } from 'vue'
export default function useTodoList() {
    const todosRef = ref(todoStorage.fetch())
    // 当todosRef.value发生变化时，就调用保存方法
    watchEffect(() => {
        todoStorage.save(todosRef.value)
    })

    return {
        todosRef
    }
}