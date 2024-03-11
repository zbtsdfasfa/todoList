// 新增方法
import { nanoid } from 'nanoid'
import { ref } from 'vue'
export default function useNewTodo(todosRef) {
    const newTodoRef = ref('')// 新任务的标题
    // 新任务的方法
    const add = () => {
        // 添加任务
        if (newTodoRef.value.trim()) {
            const todo = ({
                id: nanoid(),//每一个任务的id值
                title: newTodoRef.value,//每一个任务的名字
                completed: false //是否完成该任务
            })
            todosRef.value.push(todo)
            newTodoRef.value = ''
        }
        return
    }
    return {
        newTodoRef,
        add
    }
}