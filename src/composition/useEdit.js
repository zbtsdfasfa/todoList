import { computed, ref } from 'vue'
// 编辑的函数
export default function useEdit(todosRef) {
    // 定义一个值，用来保存编辑之前的值
    let origin = null
    // 定义个数据表示当前点击的是哪一项
    let currentRef = ref(null)
    // 双击编辑状态
    const clickEdit = (item) => {
        currentRef.value = item
        origin = item.title
    }
    // 完成编辑
    const hasDoner = (item) => {
        let value = item.title.trim()
        if (value) {
            item.title = value
        } else {
            let index = todosRef.value.indexOf(item)
            // 删除
            if (index >= 0) {
                todosRef.value.splice(index, 1)
            }
            console.log(index);
        }
        currentRef.value = null
    }
    // 取消编辑
    const cancelEdit = (item) => {
        item.title = origin
        currentRef.value = null
    }

    // 顶部全选按钮
    const allDOne = computed(() => {
        var val = todosRef.value.filter((item) => !item.completed).length === 0
        return val
    })
    function allSet(check) {
        todosRef.value.forEach((item) => {
            item.completed = check
        })
    }
    return {
        clickEdit,
        currentRef,
        hasDoner,
        cancelEdit,
        allDOne,
        allSet
    }
}