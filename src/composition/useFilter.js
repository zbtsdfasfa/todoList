import { ref, onMounted, onUnmounted, computed } from 'vue'
import { filter } from '../utils/todoStorage'
export default function useFilter(todosRef) {
    // 筛选的字段,该值更具地址栏中的hash值经行变化
    const visibilityRef = ref('all')
    // 获取地址栏中的hash值
    const onHashchange = () => {
        const hash = window.location.hash.replace(/#\/?/, '');
        if (hash === 'all' || hash === 'active' || hash === 'completed') {
            visibilityRef.value = hash
            console.log(visibilityRef.value);
        }
        return
    }

    onMounted(() => {
        window.addEventListener('hashchange', onHashchange)
    })
    onUnmounted(() => {
        window.removeEventListener('hashchange', onHashchange)
    })
    const filterList = computed(() => {
        return filter(todosRef.value, visibilityRef.value)
    })
    // 剩余多少项未完成
    const notDone = computed(() => {
        return filter(todosRef.value, 'active')
    })
    // 已经完成的
    const hasDone = computed(() => {
        return filter(todosRef.value, 'completed')
    })
    return {
        visibilityRef,
        filterList,
        notDone,
        hasDone
    }
}