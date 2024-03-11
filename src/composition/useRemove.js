// 删除函数
export default function useRemove(todosRef) {
    // 删除一个
    const remove = (item) => {
        let index = todosRef.value.indexOf(item)
        todosRef.value.splice(index, 1)
    }
    // 删除所有已完成
    const removeAll = () => {
        todosRef.value = todosRef.value.filter((item) => {
            !item.completed
        })
    }

    return {
        remove,
        removeAll
    }
}