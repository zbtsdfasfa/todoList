const LOCK_KEY = 'todoList';
// 获取todoList 列表
export function fetch() {
    let result = localStorage.getItem(LOCK_KEY)
    if (result) {
        return JSON.parse(result)
    }
    // 如果result为空就返回一个空数组
    return []
}


// 保持todos的方法
export function save(todos) {
    localStorage.setItem(LOCK_KEY, JSON.stringify(todos))
}

// 辅助函数，传入两个值：tods筛选的数据，visibility筛选的值
export function filter(todos, visibility) {
    if (visibility === 'all') {
        return todos
    } else if (visibility === 'active') {
        return todos.filter((item) => !item.completed)
    } else if (visibility === 'completed') {
        return todos.filter((item) => item.completed)
    }
    throw new Error
}